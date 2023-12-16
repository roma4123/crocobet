import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IslotsCategory } from '../../Models/slots_Models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slot-catergory-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-catergory-menu.component.html',
  styleUrl: './slot-catergory-menu.component.scss',
})
export class SlotCatergoryMenuComponent {
  @Input({ required: true }) categoryList: IslotsCategory[] = [];
  @Input() selectedCategoryIndex!: number | null;
  @Output() onClickCategoryItem: EventEmitter<number> = new EventEmitter();

  public onClickCategory(index: number) {
    this.onClickCategoryItem.emit(index);
  }
}
