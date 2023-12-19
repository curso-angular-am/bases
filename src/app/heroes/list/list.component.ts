import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public heroeNames: string[] = ['Spider-man', 'Ironman', 'Doctor Strange', 'Ant-man', 'Black Panther'];
  public deletedHero?: string = '';


  removeLastHero(){
    this.deletedHero = this.heroeNames.pop();
  }


  resetList(){
    this.heroeNames = ['Spider-man', 'Ironman', 'Doctor Strange', 'Ant-man', 'Black Panther'];
  }


}
