import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    NgClass,
    FormsModule,
  ],
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isActivate = false;
  isLogin: boolean = true;
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private router: Router) {
  }

  onRegisterLinkClick(event: Event): void {
    event.preventDefault();
    this.isActivate = false;
  }

  onLoginLinkClick(event: Event): void {
    event.preventDefault();
    this.isActivate = true;
  }

  onLoginClick() {
    if (this.username === 'user' && this.password === 'ginopeppino432@!') {
      alert('Login successful!');

      // Naviga e gestisci la Promise
      this.router.navigate(['/dashboard'])
        .then(() => {
          console.log('Navigazione completata con successo!');
          // Esegui azioni aggiuntive dopo la navigazione, se necessario
        })
        .catch((error) => {
          console.error('Errore durante la navigazione:', error);
        });
    } else {
      alert('Invalid username or password');
    }
  }

}
