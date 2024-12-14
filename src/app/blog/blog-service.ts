import {ChangeDetectorRef, Injectable} from '@angular/core';
import {BlogPostData} from "./blog-post-data";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {BlogFirebaseService} from "../firebase";
import {waitForAsync} from "@angular/core/testing";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // injects(adds a dependency of blogFirebaseService which interact with the database by predefined functions like GetBlogData
  constructor(private blogService: BlogFirebaseService) {
    // Subscribe to the Observable and update the BehaviorSubject
    this.blogService.getBlogData().subscribe(posts => {
      this.postsSubject.next(posts);
    });
  }


  // Holds the current list of blog posts and allows updates.
  private postsSubject: BehaviorSubject<BlogPostData[]> = new BehaviorSubject<BlogPostData[]>([])


  // Observable that emits the current list of blog posts as an immutable array.
  // Components or other services can subscribe to this to react to changes in the list.
  readonly posts$: Observable<readonly BlogPostData[]> = this.postsSubject.asObservable()

  // Holds the current selection of blog tags as a Set for efficient operations like add/delete.
  private selectionSubject: BehaviorSubject<Set<string>> = new BehaviorSubject(new Set<string>)

  // Observable that emits the current selection of tags as an array for easier iteration in the UI.
  // Transforms the Set into an array on each emission.
  readonly selection$: Observable<readonly string[]> = this.selectionSubject.asObservable()
    .pipe(map(set => [ ...set ]))


  // Observable that emits the list of blog posts filtered and sorted based on the selected tags.
// Combines the latest values from `posts$` (list of blog posts) and `selection$` (selected tags).
  readonly selectedPosts$: Observable<readonly BlogPostData[]> = combineLatest([ this.posts$, this.selection$ ] as const)
    .pipe(

      // this is where the sorting is going on
      map(([ posts, selection ]) =>
        [...posts].sort((postA, postB) => {

          // Counts the number of tags in postA that match the selected tags.
          const tagsA = postA.tags?.filter(tag => selection.includes(tag)).length || 0;

          // Counts the number of tags in postB that match the selected tags. if it doesn't have tags returns 0
          const tagsB = postB.tags?.filter(tag => selection.includes(tag)).length || 0;
          // Sorts posts in descending order based on the number of matching tags.
          return tagsB - tagsA;

        })
      )
    );


  // Replaces the current selection with a new array of tags.
  // Converts the array into a Set to remove duplicates and emit the updated selection.
  updateSelection(newSelection: string[]) {
    this.selectionSubject.next(new Set(newSelection));
  }

  // Toggles a specific tag in the current selection.
  // If the tag is already selected, it removes it; otherwise, it adds it.
  // Emits the updated selection after modification.
  toggleSelectionTag(tag: string) {
    // Get a copy of the current selection.
    let newSelection = new Set(this.selectionSubject.value);

    if (newSelection.has(tag)) {
      newSelection.delete(tag)
    } else {
      newSelection.add(tag)
    }

    this.selectionSubject.next(newSelection);
  }


}




