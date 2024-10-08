import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatTabNav, MatTabNavPanel} from "@angular/material/tabs";

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
    MatTabNav,
    MatTabNavPanel
  ],
  standalone: true
})
export class HeaderComponent implements OnChanges {
  @Input() value: string = ''
  currentValue = this.value
  interval: any


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

}
