import {Component, Input} from '@angular/core';
import {MatCard, MatCardImage} from "@angular/material/card";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-two-collum-styleable',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    NgIf
  ],
  templateUrl: './two-collum-styleable.component.html',
  styleUrl: './two-collum-styleable.component.scss'
})
export class TwoCollumStyleableComponent {

  @Input() side: "left" | "right" = "left"
  @Input() title: string | null = null
  @Input() image: string = "assets/me_photo.svg"

  text = "Hi I am Stanislav, I am a high school student at the Gymnázium a Střední odborná škola Rokycany, where i am studying IBDP. In my free-time I like to program and make stuff for and print on my 3D printer, basically engineering in general. I love to make engineering projects a while when I got into engineering I started by making trying to make remote controlled car, I made the chassis design, and failed, after being printed it did not fit together. So I made a 2nd, 3rd, 4th version then I got stuck on making circuits, I got over that, the only that stopped me was a motor that wasn´t powerful enough to propel the wheels."

}
export interface TilesData {
  title: string;
  side: 'left' | 'right' ;
  id: number
  text:string
  image:string
}
