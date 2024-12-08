import {Injectable} from '@angular/core';
import {BlogPostData} from "./blog-post-data";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {BlogFirebaseService} from "../firebase";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  //
  // private readonly RAW_POSTS: BlogPostData[] = [
  //   {id: 1, date:"2024-02-28", tags:[BlogTag.PHYSICS, BlogTag.ART, BlogTag.SCHOOL], title: 'Ichep 2024', image: 'assets/Ichep_1.jpg', content: 'Making a piece of art for a science conference',},
  //   {id: 2, date:"2023-05-21", tags:[BlogTag.PHYSICS,BlogTag.PROGRAMMING, BlogTag.SCHOOL], title: 'Tokamak', image:'assets/tokamak.jpg', content: ' '},
  //   {id: 5, date:"2023-06-04", tags:[BlogTag.FREE_TIME,BlogTag.ART], title: 'Art camp 2023', image:'assets/art_course.jpg', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
  //   {id: 6, date:"2024-03-09", tags:[BlogTag.FREE_TIME, BlogTag.PROGRAMMING], title: 'App Decibel', image:'assets/fanda.svg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here:.', link:"https://decibel.bronaruzicka.cz/."},
  //   {id: 7, date:"2024-03-18", tags:[BlogTag.PHYSICS, BlogTag.SCHOOL], title: 'Physics brawl', image:'assets/soutez_001.jpg', content: 'I participated in physics competition Physics brawl in a team of 5 people Adam Baborák, Benjamin Hejda, Jindřich Boula and Huu Duy Nguyen. ' + 'More info about the competition:', link:"https://fyziklani.org/"},
  //   {id: 8, date:"2023-02-01", tags:[BlogTag.FREE_TIME, BlogTag.PART_TIME], title: 'Paintball', image:'assets/paintball.jpg', content: 'From February 2023 I was going on a part-time job where every week we held a paintball action for 20-80 people it involved explanation of rules and handling of paintball guns, sometimes ',},
  // ];

  // injects(adds a dependency of blogFirebaseService which interact with the database by predefined functions like GetBlogData
  constructor(private blogService: BlogFirebaseService) {
    // Subscribe to the Observable and update the BehaviorSubject
    this.blogService.getBlogData().subscribe(posts => {
      this.postsSubject.next(posts);
    });
  }

  // empty at first but the constructor adds the data after getting it from database
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




