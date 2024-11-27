import { Component  } from '@angular/core';
import {AsyncPipe, CommonModule, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../blog-service";
import {BlogPostData} from "../blog-post-data";
import {distinctUntilChanged, map, Observable} from "rxjs";


import {MatCardModule} from "@angular/material/card";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatButton} from "@angular/material/button";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {BlogTag} from "../blog-tag";


@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatChip,
    MatChipSet,
    MatButton,
    NgForOf,
    NgOptimizedImage,
    MatGridTile,
    MatGridList,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})

// data of blog cards should be replaced by a database
export class BlogCardComponent {

  get posts$(): Observable<readonly BlogPostData[]> {
    return this.blogService.selectedPosts$;
  }

  get selection$(): Observable<readonly BlogTag[]> {
    return this.blogService.selection$;
  }

  constructor(
    private blogService: BlogService
  ) { }

  toggleTagged(event: MouseEvent, tag: BlogTag): void {
    event.preventDefault();
    event.stopPropagation();

    this.blogService.toggleSelectionTag(tag);
  }

}
