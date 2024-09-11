import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NONE_TYPE} from "@angular/compiler";
import {BlogComponent} from "./blog/blog.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent},
];
