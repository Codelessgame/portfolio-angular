import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {BlogFirebaseService} from "../../firebase";
import {empty} from "rxjs";

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
    ReactiveFormsModule
  ]
})
export class AddBlogPostToDatabaseComponent {
  blogService = inject(BlogFirebaseService)


  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required],
    //todo should be string[] and not null
    tags:null,
    image: [null, Validators.required],
    image_2: null,
    image_position: [null, Validators.required]

  });
  hasUnitNumber = false;

  onSubmit(): void {
    let data = this.addressForm.value

    let image = data.image
    console.log(image)

    this.blogService.addBlogData(data)
    console.log(this.addressForm.value)
  }
}
