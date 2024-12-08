import {inject, Injectable} from "@angular/core";
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {BlogPostData} from "./blog/blog-post-data";

@Injectable({providedIn:'root'})
export class BlogFirebaseService{
  firestore = inject(Firestore)
  blogCollection = collection(this.firestore, 'blog_data')


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
