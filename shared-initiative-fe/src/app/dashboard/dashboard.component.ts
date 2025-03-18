import { Component } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    NgForOf,
    NgStyle
  ],
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    { image: 'assets/images/dd.jpg' },
    { image: 'assets/images/dd2.jpg' },
    { image: 'assets/images/dd3.jpg' },
    { image: 'assets/images/dd4.jpg' },

  ];

  getSlideStyle(index: number) {
    const translateValue = index * 60;
    return {
      'z-index': this.cards.length - index,
      'transform': `translate(-${translateValue}px, -${translateValue}px)`,
      'opacity': '1',
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%'
    };
  }

  moveFirstToLast() {
    const firstCard = this.cards.shift(); // Rimuovi la prima card
    if (firstCard) {
      this.cards.push(firstCard); // Aggiungi la prima card alla fine
    }
  }
}
