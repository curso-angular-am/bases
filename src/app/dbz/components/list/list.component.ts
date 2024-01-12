import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  // Componente hijo
  @Input()
  public characterList: Character[] = [] 


  onDeleteCharacter(index:number){
    console.log('Indice: ', index);
    
  }

}
