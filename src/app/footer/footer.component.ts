import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatIcon,
    MatList,
    MatListItem
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
