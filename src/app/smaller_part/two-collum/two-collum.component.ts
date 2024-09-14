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
    {id: 1, side: 'left', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus leo. Nam nec orci semper, auctor dui nec, finibus augue. Integer ac pellentesque arcu, sed finibus libero. Nullam euismod dui nec imperdiet fringilla. Quisque rhoncus lorem at velit vehicula elementum. Quisque a dictum quam, quis tincidunt felis. Morbi pulvinar nisl id euismod egestas. Praesent metus enim, venenatis at erat vel, mollis facilisis lectus. Fusce vulputate non dui ut venenatis. Nunc a tortor mi. Phasellus posuere orci quis mauris varius, ac scelerisque nunc vehicula.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITZOKvHwIUFq9f5Rm1YzlG3OegYM3YFLlVA&s\""},
    {id: 1, side: 'right', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus leo. Nam nec orci semper, auctor dui nec, finibus augue. Integer ac pellentesque arcu, sed finibus libero. Nullam euismod dui nec imperdiet fringilla. Quisque rhoncus lorem at velit vehicula elementum. Quisque a dictum quam, quis tincidunt felis. Morbi pulvinar nisl id euismod egestas. Praesent metus enim, venenatis at erat vel, mollis facilisis lectus. Fusce vulputate non dui ut venenatis. Nunc a tortor mi. Phasellus posuere orci quis mauris varius, ac scelerisque nunc vehicula.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITZOKvHwIUFq9f5Rm1YzlG3OegYM3YFLlVA&s\""}

  ]


}

export interface TilesData {
  side: 'left' | 'right' ;

  id: number
  text:string
  image:string
}
