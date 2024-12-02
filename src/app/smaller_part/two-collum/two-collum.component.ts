import {Component} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage
} from "@angular/material/card";
import {MatSidenav} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-two-collum',
  standalone: true,
  imports: [
    MatGridTile,
    MatGridList,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardFooter,
    MatSidenav,
    MatCardActions,
    MatButton,
    MatCardImage,
    NgIf,
  ],
  templateUrl: './two-collum.component.html',
  styleUrl: './two-collum.component.scss'
})


export class TwoCollumComponent {
  tiles: TilesData[] = [
    {id: 1, side: 'left', title:"About me", text: "Hi I am Stanislav, I am a high school student at the Gymnázium a Střední odborná škola Rokycany, where i am studying IBDP. In my free-time I like to program and make stuff for and print on my 3D printer, basically engineering in general. \n" +
        "\n" + "I love to make engineering projects a while when I got into engineering I started by making trying to make remote controlled car, I made the chassis design, and failed, after being printed it did not fit together. So I made a 2nd, 3rd, 4th version then I got stuck on making circuits, I got over that, the only that stopped me was a motor that wasn´t powerful enough to propel the wheels. \n",
      image: "/assets/me_photo.jpg"},
    {id: 2, side: 'right', title:"Under Construction", text: "Lorem ipsum----> Brainstorming is a creative process that allows ideas to flow freely and generate innovative solutions. In a collaborative setting, individuals share their thoughts without fear of judgment, fostering an environment of open communication. The objective is to explore as many perspectives as possible, encouraging out-of-the-box thinking and unconventional approaches.",
      image: "/assets/brainstorm.jpg"}

  ]


}

export interface TilesData {
  title: string;
  side: 'left' | 'right' ;
  id: number
  text:string
  image:string
}
