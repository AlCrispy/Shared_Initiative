import { bootstrapApplication } from '@angular/platform-browser';
import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
    )
  ]
}).catch(err => console.error(err));
