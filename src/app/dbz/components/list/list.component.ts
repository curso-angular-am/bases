import { Component, EventEmitter, Input, Output } from '@angular/core';
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


  // funcion para emitir el indice
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number) {
    //console.log('Indice borrado: ', index);
    this.onDelete.emit(index);
  }



}
