import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-character-form',
  imports: [
    MatFormField,
    FormsModule,
    MatOption,
    MatSelect,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './character-form.component.html',
  standalone: true,
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {
  newCharacter = {
    id: null,
    name: '',
    ac: '',
    initiative: null,
    type: 'ally',
    image: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CharacterFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submit() {
    if (this.newCharacter.name && this.newCharacter.initiative !== null) {
      this.dialogRef.close(this.newCharacter);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
