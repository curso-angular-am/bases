import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {

  // Emitir datos desde el padre al hijo usando OUTPUT
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void{
    console.log('Formulario Character:',this.character);

    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    //Limpiar valores ( en una linea )
    this.character = { name: '', power: 0 };
    
  }


}
