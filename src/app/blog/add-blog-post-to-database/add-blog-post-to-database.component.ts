import {Component, inject} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup, Form, FormArray} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {BlogFirebaseService} from "../../firebase";
import {MatIcon} from "@angular/material/icon";
import {MatChip, MatChipListbox, MatChipOption, MatChipSet} from "@angular/material/chips";
import {AsyncPipe} from "@angular/common";
import {user} from "@angular/fire/auth";


@Component({
  selector: 'app-add-blog-post-to-database',
  templateUrl: './add-blog-post-to-database.component.html',
  styleUrl: './add-blog-post-to-database.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIcon,
    MatChipListbox,
    MatChip,
    MatChipSet,
    MatChipOption,
    AsyncPipe
  ]
})

export class AddBlogPostToDatabaseComponent {
  fb = inject(FormBuilder)
  blogService = inject(BlogFirebaseService)


  addressForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    date: ['', Validators.required],
    image: ['', Validators.required],
    tags: this.fb.array([]),
  });


  async onSubmit(): Promise<void> {
    if (this.addressForm.valid) {
      const data =this.addressForm.value;
      // Adds the blog data to the database
      this.blogService.addBlogData(data);
    }
  }

  get tags(): FormArray{
    return this.addressForm.get('tags') as FormArray;
  }

  addTag(tag:string): void {
    if (tag) {
      this.tags.push(this.fb.control(tag));
    }
  }

  removeTag(index:number){
    this.tags.removeAt(index);
  }

  // puts image download url to Formdata.image
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      console.log(file)
      const filePath = `blog-images/${file.name}_${Date.now()}`;

      // Call the addImage function
      this.blogService.addImage(filePath, file).then((downloadUrl) => {
        // Update the form control with the image URL
        this.addressForm.patchValue({ image: downloadUrl });
      }).catch((error) => {
        console.error('Error uploading image:', error);
      });
    }
  }

  protected readonly user = user;
}
