import {Component} from "@angular/core";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-star',
  imports: [NgStyle],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
  standalone: true,
})
export class StarComponent{
   star_number: number = 40;
   star_data: StarData[] = []

  constructor() {
     this.generate_star_data()
  }

  generate_star_data(){
    for ( let i = 0; i < this.star_number+1; i++){
      const top = Math.random() * 100; // Random vertical position
      // Randomize animation duration
      const tail_length = 6 + Math.random() * 25
      const duration = 2 + Math.random() * 5; // Between 2s and 5s
      const delay = Math.random() * 5; // Random delay for staggered starts

      // push the data
      const data = { id: i, delay, duration ,tail_length, top}
      this.star_data.push(data)
    }
  }
}


interface StarData {
  id: number
  delay: number
  duration: number
  top: number

}


