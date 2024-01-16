import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Gokú',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 6000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 3000
    },
  ];


  onNewCharacter(character: Character){
    
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    /* Otra forma de hacerlo: 
    const newCharacter: Character = { id: uuid(), ...character };
    */

    // agregar nuevo personaje
    this.characters.push(newCharacter);
    
  }

  /*
  deleteCharacterFromArray(index: number){
    this.characters.splice(index,1); // que borre solo 1 elemento
  }
  */

  deleteCharacterById( id:string ){
    this.characters = this.characters.filter( character => character.id != id );
  }
}
