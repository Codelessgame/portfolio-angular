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
  private readonly API_URL = 'http://127.0.0.1:5000/'; // Update with your API URL

  // fetchdata(){
  //   //   get the data => store them
  //   fetch(this.API_URL).then(response => {console.log(response)})
  //
  //
  // }
  //
  // // gets the apie
  // constructor( private http: HttpClient) {
  //   this.fetchdata();
  // }


  private readonly RAW_POSTS: BlogPostData[] = [
    {id: 1, date:"2024-02-28", subtitle: "hi", tags:[BlogTag.PHYSICS, BlogTag.ART, BlogTag.SCHOOL], title: 'Ichep 2024', image:'./code_img.jpg', content: 'Making a piece of art for a science conference',},
    {id: 2, date:"2023-05-21", subtitle: "hi", tags:[BlogTag.PHYSICS,BlogTag.PROGRAMMING, BlogTag.SCHOOL], title: 'Trip to a fusion reactor', image:'./code_img.jpg', content: 'On the 31st of June I with a group of people set out within a school action "TPV" (week of practical education), when we got there we were briefed how this amateur reactor works and could even start it ourselves'},
    {id: 3, date:"2023-07-18", subtitle: "hi", tags:[BlogTag.PHYSICS], title: 'Nuclear days', image:'code_img.jpg', content: 'I visited a showcase of nuclear physics focused on nuclear reactors', },
    {id: 4, date:"2023-06-14", subtitle: "hi", tags:[BlogTag.PHYSICS], title: 'Nobel\'s institute', image:'.ode_img.jpg', content: 'A picture of me in the Nobel\'s library, after a tour, provided by Nobel\'s institute, through Stockholm about the Nobel prizes.'},
    {id: 5, date:"2023-06-04", subtitle: "hi", tags:[BlogTag.FREE_TIME,BlogTag.ART], title: 'Art camp 2023', image:'./code', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 6, date:"2024-03-09", subtitle: "hi", tags:[BlogTag.FREE_TIME, BlogTag.PROGRAMMING], title: 'App Decibel', image:'src/app/home/jpg/code_img.jpg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here:.', link:"https://decibel.bronaruzicka.cz/."},
    {id: 7, date:"2024-03-18", subtitle: "hi", tags:[BlogTag.PHYSICS, BlogTag.SCHOOL], title: 'Physics brawl', image:'src/app/home/jpg/code_img.jpg', content: 'I participated in physics competition Physics brawl in a team of 5 people Adam Baborák, Benjamin Hejda, Jindřich Boula and Huu Duy Nguyen. ' + 'More info about the competition:', link:"https://fyziklani.org/"},
    {id: 8, date:"2023-02-01", subtitle: "hi", tags:[BlogTag.FREE_TIME, BlogTag.PART_TIME], title: 'Paintball', image:'src/app/home/jpg/code_img.jpg', content: 'From February 2023 I was going on a part-time job where every week we held a paintball action for 20-80 people it involved explanation of rules and handling of paintball guns, sometimes ',},
    {id: 10,date:"2022-06-04", subtitle: "hi", tags:[BlogTag.FREE_TIME,BlogTag.ART], title: 'Art camp 2022', image:'src/app/home/jpg/code_img.jpg', content: 'Summer 2022 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 11,date:"2021-06-04", subtitle: "hi", tags:[BlogTag.FREE_TIME,BlogTag.ART], title: 'Art camp 2020', image:'src/app/home/jpg/code_img.jpg', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 9, date:"2019-10-13", subtitle: "hi", tags:[BlogTag.FREE_TIME, BlogTag.PHYSICS], title: 'Space museum', image:'src/app/home/jpg/code_img.jpg', content: 'I have visited an exhibition about space technology',},
    {id: 12,date:"2019-06-04", subtitle: "hi", tags:[BlogTag.FREE_TIME,BlogTag.ART], title: 'Parkour camp', image:'src/app/home/jpg/code_img.jpg', content: 'I went to a parkour camp',},
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



