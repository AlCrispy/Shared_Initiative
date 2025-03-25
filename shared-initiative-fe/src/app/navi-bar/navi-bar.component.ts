import { Component } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {MatDialog} from '@angular/material/dialog';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {CharacterModalComponent} from '../character-form/character-form.component';

@Component({
  selector: 'app-navi-bar',
  imports: [
    IonicModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './navi-bar.component.html',
  styleUrl: './navi-bar.component.css'
})
export class NaviBarComponent {

  constructor(private dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    this.dialog.open(CharacterModalComponent, {
      width: '400px'
    });
  }

  logout(): void {
    // Qui puoi aggiungere la logica per il logout (es. rimuovere token, chiamare API, ecc.)
    this.router.navigate(['/login']);
  }
}
