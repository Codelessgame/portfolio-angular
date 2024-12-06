import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatGridList} from "@angular/material/grid-list";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatGridList,
    MatCardFooter,
    MatCardContent,
    MatCardImage
  ],
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {
  tiles: TilesData[] = [
    { title:"CODE", link:"https://github.com/Codelessgame?tab=repositories", image_url:"/assets/home/code_img.jpg"},
    { title:"2D_ART", link:"https://photos.app.goo.gl/JHJo7ss2rh3L1vNi6", image_url:"/assets/home/art_img.jpg"},
    { title:"3D_ART", link:"https://sketchfab.com/stanik.ruzicka/models", image_url:"/assets/home/3D_art.jpg"}
  ]



  getAverage_color(){}
}
export interface TilesData {
  link: string;
  title: string;
  image_url:string
  averageColor?: string;
}
