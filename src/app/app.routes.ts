import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BlogCardComponent} from "./blog/blog-card/blog-card.component";
import {AddBlogPostToDatabaseComponent} from "./blog/add-blog-post-to-database/add-blog-post-to-database.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogCardComponent},
  { path: 'login', component: AddBlogPostToDatabaseComponent},

];
