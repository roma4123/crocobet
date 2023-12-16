import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IGamesByProvider, Igames } from '../../Models/slots_Models';

@Component({
  selector: 'app-slot-game',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './slot-game.component.html',
  styleUrl: './slot-game.component.scss',
})
export class SlotGameComponent {
  @Input({ required: true }) game!: Igames | IGamesByProvider;
  @Input() gameIndex!: number;
}
