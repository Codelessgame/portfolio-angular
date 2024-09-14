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
  @Input() backgroundImage1 = ''
  @Input() backgroundImage2 = ''
  @Input() backgroundImage3 = ''
  @Input() url_1: string = ''
  @Input() url_2: string = ''
  @Input() url_3: string = ''

  protected readonly createImageBitmap = createImageBitmap;
  protected readonly name = name;
}
