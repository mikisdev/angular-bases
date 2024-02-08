import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public heroName: string = 'Iron Man'
  public realName: string = 'Tony Stark'
  public age: number = 45

  get capitalizeName(): string{
    return this.heroName.toUpperCase()
  }

  getHeroDescription(): string{

    return `${this.realName} tiene ${this.age} años`
  }

  changeHero(): void{
    this.heroName = 'Spiderman'
    this.realName = 'Peter Parker'
  }

  changeAge(): void{
    this.age = 25
  }

  resetForm(): void{
    this.heroName = 'Iron Man'
    this.realName = 'Tony Stark'
    this.age = 45
  }




}
