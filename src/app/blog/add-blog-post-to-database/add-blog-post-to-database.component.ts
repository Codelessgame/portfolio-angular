import { Component, inject } from '@angular/core';

import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {BlogFirebaseService} from "../../firebase";
import {BlogPostData} from "../blog-post-data";
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import {object} from "@angular/fire/database";
import {finalize} from "rxjs";
import {query} from "@angular/animations";
import {getHtmlHeadTagElement} from "@angular/cdk/schematics";

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
  constructor() {
  }

  fb = inject(FormBuilder)
  blogService = inject(BlogFirebaseService)

  addressForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    date: ['', Validators.required],
    image: [object, Validators.required],
    // todo implement tags
    tags: [[null]],
  });

  async onSubmit(): Promise<void> {
    if (this.addressForm.valid) {
      const data = this.addressForm.value;
      const filePath = `blog-images/${data.title}_${Date.now()}`;
      // this adds image and returns reference url

      data.image = await this.blogService.addImage(filePath, data.image)
      // Add the blog data to the service
      console.log("submitted data:" ,data)
      // todo the image is undefined in storage why?
      this.blogService.addBlogData(data);
    }
  }

  createTag_input(){
  }
}
