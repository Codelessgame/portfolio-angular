import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {StarComponent} from "./star/star.component";
import {user} from "@angular/fire/auth";
import {UserService} from "../user.service";

const letters = "AÁBCČDĎEÉĚFGHIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYZŽ0123456789"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatNavList,
    MatListItem,
    MatToolbar,
    MatAnchor,
    RouterLink,
    MatButtonToggle,
    MatButton,
    StarComponent,
  ],
  standalone: true
})
export class HeaderComponent implements OnChanges  {
  userService = inject(UserService)
  @Input() value: string = ''
  currentValue = this.value
  interval: any
  private star_number: number = 50

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('value')) {
      this.currentValue = this.value
    }
  }

  startAnimation() {
    clearInterval(this.interval)

    this.currentValue = this.value
    let iteration = 0

    this.interval = setInterval(() => {
      this.currentValue = this.value
        .split("")
        .map((char, index) =>
          index >= iteration
            ? letters[Math.floor(Math.random() * letters.length)]
            : char
        )
        .join("")

      if (iteration >= this.value.length) {
        clearInterval(this.interval)
      }

      iteration += 1 / 3
    }, 30)
  }

  protected readonly user = user;
}
