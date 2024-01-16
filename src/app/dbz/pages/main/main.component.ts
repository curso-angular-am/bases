import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private dbzService: DbzService){}

  // acceder al servicio para obtener los personajes
  get characters(): Character[]{
    return this.dbzService.characters;
  }


  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacter(id: string){
    this.dbzService.deleteCharacterById(id);
  }

}
