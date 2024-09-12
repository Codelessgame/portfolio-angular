import {Injectable} from '@angular/core';
import {Tag} from "./tag";
import {BlogCardData} from "./blog-card-data";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

   RAW_POSTS: BlogCardData[] = [
    {id: 1, date:"2024-02-28", subtitle: "hi", tags:[Tag.PHYSICS, Tag.ART, Tag.SCHOOL], title: 'Ichep 2024', image:'assets/Ichep_1.jpg', content: 'Making a piece of art for a science conference',},
    {id: 2, date:"2023-05-21", subtitle: "hi", tags:[Tag.PHYSICS,Tag.PROGRAMMING, Tag.SCHOOL], title: 'Trip to a fusion reactor', image:'assets/tokamak.jpg', content: 'On the 31st of June I with a group of people set out within a school action "TPV" (week of practical education), when we got there we were briefed how this amateur reactor works and could even start it ourselves'},
    {id: 3, date:"2023-07-18", subtitle: "hi", tags:[Tag.PHYSICS], title: 'Nuclear days', image:'assets/home/code_img.jpg', content: 'I visited a showcase of nuclear physics focused on nuclear reactors', },
    {id: 4, date:"2023-06-14", subtitle: "hi", tags:[Tag.PHYSICS], title: 'Nobel\'s institute', image:'assets/nobeluv_institut.jpg', content: 'A picture of me in the Nobel\'s library, after a tour, provided by Nobel\'s institute, through Stockholm about the Nobel prizes.'},
    {id: 5, date:"2023-06-04", subtitle: "hi", tags:[Tag.FREE_TIME,Tag.ART], title: 'Art camp 2023', image:'assets/art_course.jpg', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 6, date:"2024-03-09", subtitle: "hi", tags:[Tag.FREE_TIME, Tag.PROGRAMMING], title: 'App Decibel', image:'assets/fanda.svg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here:.', link:"https://decibel.bronaruzicka.cz/."},
    {id: 7, date:"2024-03-18", subtitle: "hi", tags:[Tag.PHYSICS, Tag.SCHOOL], title: 'Physics brawl', image:'assets/soutez_001.jpg', content: 'I participated in physics competition Physics brawl in a team of 5 people Adam Baborák, Benjamin Hejda, Jindřich Boula and Huu Duy Nguyen. ' + 'More info about the competition:', link:"https://fyziklani.org/"},
    {id: 8, date:"2023-02-01", subtitle: "hi", tags:[Tag.FREE_TIME, Tag.PART_TIME], title: 'Paintball', image:'assets/paintball.jpg', content: 'From February 2023 I was going on a part-time job where every week we held a paintball action for 20-80 people it involved explanation of rules and handling of paintball guns, sometimes ',},
    {id: 10,date:"2022-06-04", subtitle: "hi", tags:[Tag.FREE_TIME,Tag.ART], title: 'Art camp 2022', image:'assets/art_course_2022.jpg', content: 'Summer 2022 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 11,date:"2021-06-04", subtitle: "hi", tags:[Tag.FREE_TIME,Tag.ART], title: 'Art camp 2020', image:'assets/home/code_img.jpg', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 9, date:"2019-10-13", subtitle: "hi", tags:[Tag.FREE_TIME, Tag.PHYSICS], title: 'Space museum', image:'assets/vesmirne_muzeum-min.jpg', content: 'I have visited an exhibition about space technology',},
    {id: 12,date:"2019-06-04", subtitle: "hi", tags:[Tag.FREE_TIME,Tag.ART], title: 'Parkour camp', image:'assets/parkour_camp.jpg', content: 'I went to a parkour camp',},
  ];
}
