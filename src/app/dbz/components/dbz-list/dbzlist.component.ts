import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbzlist.component.html',
  styleUrl: './dbzlist.component.css'
})
export class DbzlistComponent {

  @Input()
  public listTitle?: string

  @Input()
  public characterList?: Character[]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string): void{

    if(!id) return;

    this.onDelete.emit(id)
  }
}
