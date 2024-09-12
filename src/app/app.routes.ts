import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BlogCardComponent} from "./blog/blog-card/blog-card.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogCardComponent},
];
