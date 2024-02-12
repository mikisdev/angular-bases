import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrl: './dbz-add-character.component.css'
})
export class DbzAddCharacterComponent {
  public character: Character={
    name: '',
    power: 0
  }

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter()

  emitCharacter():void{

    console.log(this.character)

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character})

    this.character.name = ''
    this.character.power = 0

  }

}
