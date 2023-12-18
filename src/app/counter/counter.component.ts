import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  title: string = 'Mi primera app';
  counter: number = 10;


  incrementarPor(value:number){
    this.counter = this.counter + value;
  }

  reset(){
    this.counter = 10;
  }






}
