import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Spider-Woman', 'Hulk', 'Thor', 'Iron Man', 'She Hulk']
  public deleteHero?: string


  removeLastHero():void {
    this.deleteHero = this.heroNames.pop()
  }
}
