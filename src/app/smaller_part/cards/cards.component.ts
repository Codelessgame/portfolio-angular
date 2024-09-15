import {Component, Input} from '@angular/core';
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
    { title:"TITLE", link:"", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITZOKvHwIUFq9f5Rm1YzlG3OegYM3YFLlVA&s"},
    { title:"TITLE", link:"", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITZOKvHwIUFq9f5Rm1YzlG3OegYM3YFLlVA&s"}

  ]


}

export interface TilesData {
  link: string;
  title: string;
  image_url:string
}
