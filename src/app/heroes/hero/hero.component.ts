import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(){
    return `${this.name} - ${this.age}`
  }


  changeHeroe(){
    this.name = 'Spiderman'
  }


  changeAge(){
    this.age = 20;
  }


  resetForm(){
    this.name = 'ironman';
    this.age = 45;
  }


}
