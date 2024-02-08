import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increasedBy(1)"><span>+1</span></button>
  <button (click)="reset()"><span>0</span></button>
  <button (click)="increasedBy(-1)"><span>-1</span></button>
  `,
  styleUrl: './counter.component.css'

})

export class CounterComponent {
  constructor() { }

  public counter: number = 0;

  increasedBy(value: number): void{
    this.counter+=value
  }

  reset(): void{
    this.counter=0
  }

}
