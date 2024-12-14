import {inject, Injectable} from "@angular/core";
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {BlogPostData} from "./blog/blog-post-data";
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';


@Injectable({providedIn:'root'})
export class BlogFirebaseService{



  firestore = inject(Firestore)
  blogCollection = collection(this.firestore, 'blog_data')
  storage = inject(Storage)


  async addImage(filePath:string, image:File ){
    const fileRef = ref(this.storage, filePath)
    await uploadBytes(fileRef, image)
    return await getDownloadURL(fileRef)
  }

   getBlogData(): Observable<BlogPostData[]>{
    return collectionData(this.blogCollection,{
      idField:'id'
    })
  }

  addBlogData(blog_data:any): Observable<string>{
    const promise = addDoc(this.blogCollection, blog_data).then(
      (response)=> response.id);
    return from(promise)
  }




}

