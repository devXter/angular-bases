import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output() onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input() characterList: Character[] = [
    {name: 'Trunks', power: 10}
  ]

  onDeleteCharacter(id?: string): void {
    if  (!id) return;

    this.onDeleteId.emit(id);
  }
}
