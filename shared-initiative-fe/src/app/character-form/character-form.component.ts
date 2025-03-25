import {Component} from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
interface ImageSet {
  character: string;
  cover: string;
  title: string;
}
@Component({
  selector: 'app-character-form',
  imports: [
    MatFormField,
    FormsModule,
    MatOption,
    MatSelect,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    NgIf,
    NgForOf,
  ],
  templateUrl: './character-form.component.html',
  standalone: true,
  styleUrl: './character-form.component.css'
})
export class CharacterModalComponent {
  characterForm: FormGroup;

  // Oggetto che mappa le immagini per ciascun personaggio
  images: { [key: string]: ImageSet } = {
    dark_rider: {
      character: 'assets/images/dark_rider-character.webp',
      cover: 'assets/images/dark_rider-cover.jpg',
      title: 'assets/images/dark_rider-title.png'
    },
    force_mage: {
      character: 'assets/images/force_mage-character.webp',
      cover: 'assets/images/force_mage-cover.jpg',
      title: 'assets/images/force_mage-title.png'
    }
    // Aggiungi altri personaggi con la stessa struttura
  };

  selectedCharacterImages: ImageSet = { character: '', cover: '', title: '' };

  types = ['Eroe', 'Nemico'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CharacterModalComponent>
  ) {
    this.characterForm = this.fb.group({
      name: ['', [Validators.required]],
      initiative: ['', [Validators.required]],
      armorClass: ['', [Validators.required, Validators.min(1)]],
      type: ['', [Validators.required]],
      imageCover: ['', [Validators.required]],
      imageCharacter: ['', [Validators.required]],
    });
  }

  // Funzione per aggiornare l'immagine del personaggio in base alla selezione della copertura
  onCoverImageChange(selectedCover: string) {
    const selectedCharacter = Object.keys(this.images).find(key => this.images[key].cover === selectedCover);
    if (selectedCharacter) {
      this.selectedCharacterImages = this.images[selectedCharacter]; // Aggiorna le immagini selezionate
      this.characterForm.get('imageCharacter')?.setValue(this.selectedCharacterImages.character); // Imposta l'immagine del personaggio automaticamente
    }
  }

  onSubmit() {
    if (this.characterForm.valid) {
      console.log(this.characterForm.value);
      this.dialogRef.close(this.characterForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get objectKeys(): string[] {
    return Object.keys(this.images);
  }

  // Funzione per ottenere la preview dell'immagine di copertura
  get selectedCoverImage() {
    return this.selectedCharacterImages.cover;
  }

  // Funzione per ottenere la preview dell'immagine del personaggio
  get selectedCharacterImage() {
    return this.selectedCharacterImages.character;
  }
}
