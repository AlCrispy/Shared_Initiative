import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {animate, style, transition, trigger} from '@angular/animations';
import {CharacterFormComponent} from './character-form/character-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('removeCard', [
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class AppComponent {
  characters = [
    { id: 1, name: 'Card 1', ac: 15, initiative: 12, type: 'hero',  image: 'https://source.unsplash.com/random/400x200?nature' },
    { id: 2, name: 'Card 2', ac: 15, initiative: 13, type: 'enemy', image: 'https://source.unsplash.com/random/400x200?city' },
    { id: 3, name: 'Card 3', ac: 15, initiative: 14, type: 'hero', image: 'https://source.unsplash.com/random/400x200?tech' },
    { id: 4, name: 'Card 4', ac: 15, initiative: 15, type: 'enemy', image: 'https://source.unsplash.com/random/400x200?tech' },
    { id: 5, name: 'Card 5', ac: 15, initiative: 16, type: 'enemy', image: 'https://source.unsplash.com/random/400x200?tech' },
    { id: 6, name: 'Card 6', ac: 15, initiative: 4, type: 'ally', image: 'https://source.unsplash.com/random/400x200?tech' },
    { id: 7, name: 'Card 7', ac: 15, initiative: 7, type: 'boss', image: 'https://source.unsplash.com/random/400x200?tech' },
    { id: 8, name: 'Card 8', ac: 15, initiative: 25, type: 'enemy', image: 'https://source.unsplash.com/random/400x200?tech' },
    { id: 9, name: 'Card 9', ac: 15, initiative: 30, type: 'hero', image: 'https://source.unsplash.com/random/400x200?tech' }
  ];

  constructor(public dialog: MatDialog) {
    this.sortCards(); // Ensure cards are sorted on initialization
  }

  sortCards() {
    this.characters.sort((a, b) => b.initiative - a.initiative);
  }

  moveToEnd(index: number) {
    const removedCard = this.characters[index];
    this.characters.splice(index, 1);
    setTimeout(() => { // Let the animation finish
      this.characters.push(removedCard);
    }, 300);
  }

  openCardForm() {
    const dialogRef = this.dialog.open(CharacterFormComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.characters.push(result);
        this.sortCards();
      }
    });
  }
}
