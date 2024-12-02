import {Injectable} from '@angular/core';
import {BlogTag} from "./blog-tag";
import {BlogPostData} from "./blog-post-data";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {asObservable, MaybeObservable} from '../../util/MaybeObservable';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly RAW_POSTS: BlogPostData[] = [
    {id: 1, date:"2024-02-28", tags:[BlogTag.PHYSICS, BlogTag.ART, BlogTag.SCHOOL], title: 'Ichep 2024', image: 'assets/Ichep_1.jpg', content: 'Making a piece of art for a science conference',},
    {id: 2, date:"2023-05-21", tags:[BlogTag.PHYSICS,BlogTag.PROGRAMMING, BlogTag.SCHOOL], title: 'Tokamak', image:'assets/tokamak.jpg', content: ' '},
    {id: 5, date:"2023-06-04", tags:[BlogTag.FREE_TIME,BlogTag.ART], title: 'Art camp 2023', image:'assets/art_course.jpg', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 6, date:"2024-03-09", tags:[BlogTag.FREE_TIME, BlogTag.PROGRAMMING], title: 'App Decibel', image:'assets/fanda.svg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here:.', link:"https://decibel.bronaruzicka.cz/."},
    {id: 7, date:"2024-03-18", tags:[BlogTag.PHYSICS, BlogTag.SCHOOL], title: 'Physics brawl', image:'assets/soutez_001.jpg', content: 'I participated in physics competition Physics brawl in a team of 5 people Adam Baborák, Benjamin Hejda, Jindřich Boula and Huu Duy Nguyen. ' + 'More info about the competition:', link:"https://fyziklani.org/"},
    {id: 8, date:"2023-02-01", tags:[BlogTag.FREE_TIME, BlogTag.PART_TIME], title: 'Paintball', image:'assets/paintball.jpg', content: 'From February 2023 I was going on a part-time job where every week we held a paintball action for 20-80 people it involved explanation of rules and handling of paintball guns, sometimes ',},
  ];


  private postsSubject: BehaviorSubject<BlogPostData[]> = new BehaviorSubject<BlogPostData[]>(this.RAW_POSTS)
  readonly posts$: Observable<readonly BlogPostData[]> = this.postsSubject.asObservable()

  private selectionSubject: BehaviorSubject<Set<BlogTag>> = new BehaviorSubject(new Set<BlogTag>)
  readonly selection$: Observable<readonly BlogTag[]> = this.selectionSubject.asObservable()
    .pipe(map(set => [ ...set ]))

  readonly selectedPosts$: Observable<readonly BlogPostData[]> = combineLatest([ this.posts$, this.selection$ ] as const)
    .pipe(
      map(([ posts, selection ]) =>
        [...posts].sort((postA, postB) => {
          const tagsA = postA.tags.filter(tag => selection.includes(tag)).length
          const tagsB = postB.tags.filter(tag => selection.includes(tag)).length
          return tagsB - tagsA;
        })
      )
    );

  // noinspection JSUnusedGlobalSymbols
  updateSelection(newSelection: BlogTag[]) {
    this.selectionSubject.next(new Set(newSelection));
  }

  toggleSelectionTag(tag: BlogTag) {
    let newSelection = new Set(this.selectionSubject.value);

    if (newSelection.has(tag)) {
      newSelection.delete(tag)
    } else {
      newSelection.add(tag)
    }

    this.selectionSubject.next(newSelection);
  }

  getPost(id: MaybeObservable<number>): Observable<BlogPostData | undefined> {
    return combineLatest([ this.posts$, asObservable(id) ] as const)
      .pipe(
        map(([posts, id]) => {
          return posts.find(post => post.id === id)
        })
      )
  }
}




