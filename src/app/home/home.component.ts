import {Component, Input} from '@angular/core';
import {CardsComponent} from "../smaller_part/cards/cards.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardsComponent,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
