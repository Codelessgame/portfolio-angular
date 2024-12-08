import {Component, Input, OnInit} from '@angular/core';
import {CardsComponent} from "../smaller_part/cards/cards.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {TwoCollumComponent} from "../smaller_part/two-collum/two-collum.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardsComponent,
    MatGridList,
    MatGridTile,
    TwoCollumComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
}
