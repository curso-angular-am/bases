import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];


  onNewCharacter(character: Character){
    console.log('Main Page');
    
    console.log('Personaje capturado desde el padre:',character);

    this.characters.push(character);

    console.log('array character', this.characters);
    
    
  }







}
