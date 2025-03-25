import { Component } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {CharacterModalComponent} from '../character-form/character-form.component';
import {NaviBarComponent} from '../navi-bar/navi-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    NgForOf,
    NgStyle,
    NgClass,
    NaviBarComponent
  ],
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public dialog: MatDialog) {
  }

  cards = [
    { cover: 'assets/images/dark_rider-cover.jpg', title: 'assets/images/dark_rider-title.png', character: 'assets/images/dark_rider-character.webp' },
    { cover: 'assets/images/force_mage-cover.jpg', title: 'assets/images/force_mage-title.png', character: 'assets/images/force_mage-character.webp' },
    { cover: 'assets/images/dark_rider-cover.jpg', title: 'assets/images/dark_rider-title.png', character: 'assets/images/dark_rider-character.webp' },
    { cover: 'assets/images/force_mage-cover.jpg', title: 'assets/images/force_mage-title.png', character: 'assets/images/force_mage-character.webp' },
    { cover: 'assets/images/dark_rider-cover.jpg', title: 'assets/images/dark_rider-title.png', character: 'assets/images/dark_rider-character.webp' },
    { cover: 'assets/images/force_mage-cover.jpg', title: 'assets/images/force_mage-title.png', character: 'assets/images/force_mage-character.webp' },
    { cover: 'assets/images/dark_rider-cover.jpg', title: 'assets/images/dark_rider-title.png', character: 'assets/images/dark_rider-character.webp' },
    { cover: 'assets/images/force_mage-cover.jpg', title: 'assets/images/force_mage-title.png', character: 'assets/images/force_mage-character.webp' },
    { cover: 'assets/images/dark_rider-cover.jpg', title: 'assets/images/dark_rider-title.png', character: 'assets/images/dark_rider-character.webp' },
    { cover: 'assets/images/force_mage-cover.jpg', title: 'assets/images/force_mage-title.png', character: 'assets/images/force_mage-character.webp' },
  ];

  visibleCards = this.cards.slice(0, 4); // Mostra inizialmente le prime 4 card

  getSlideStyle(index: number) {
    const translateValue = index * 60;
    const opacityValue = 1 - (index * 0.2); // Calcoliamo l'opacità dinamica

    return {
      'z-index': this.cards.length - index,
      'transform': `translate(-${translateValue}px, -${translateValue}px)`,
      'opacity': opacityValue < 0 ? 0 : opacityValue,  // Non permettere che l'opacità scenda sotto 0
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'height': '100%',
    };
  }

  moveFirstToLast() {
    // Rimuove la prima card e la aggiunge alla fine
    const firstCard = this.cards.shift();
    if (firstCard) {
      this.cards.push(firstCard);
    }

    // Aggiorna le card visibili
    this.visibleCards = this.cards.slice(0, 4); // Mostra le prime 4 card
  }

  openDialog(): void {
    this.dialog.open(CharacterModalComponent);
  }
}
