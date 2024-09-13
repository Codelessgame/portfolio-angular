import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone: true,
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
}
