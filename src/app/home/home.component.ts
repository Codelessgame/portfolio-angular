import {Component, Input, OnInit} from '@angular/core';
import {CardsComponent} from "../smaller_part/cards/cards.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {HttpClient} from "@angular/common/http";
import {TwoCollumStyleableComponent} from "../smaller_part/two-collum-styleable/two-collum-styleable.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardsComponent,
    MatGridList,
    MatGridTile,
    TwoCollumStyleableComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
}
