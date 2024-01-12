import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public characters: Character[] = [];


  agregarPersonaje(character: Character){
    console.log('Main Page');
    
    console.log('Personaje capturado desde el padre:',character);

    // agregar nuevo personaje
    this.characters.push(character);
    console.log('Lista personajes padre', this.characters);
    
    
  }







}
