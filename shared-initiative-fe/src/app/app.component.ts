import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    { title: 'Card 1', description: 'First card', image: 'https://source.unsplash.com/random/400x200?nature' },
    { title: 'Card 2', description: 'Second card', image: 'https://source.unsplash.com/random/400x200?city' },
    { title: 'Card 3', description: 'Third card', image: 'https://source.unsplash.com/random/400x200?tech' }
  ];
}
