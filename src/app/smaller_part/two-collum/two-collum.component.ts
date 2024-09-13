import {Component, Input} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-two-collum',
  standalone: true,
  imports: [
    MatGridTile,
    MatGridList
  ],
  templateUrl: './two-collum.component.html',
  styleUrl: './two-collum.component.scss'
})
export class TwoCollumComponent {
  @Input() main_side: "left" | "right" = "left";

}
