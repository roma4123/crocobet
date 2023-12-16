import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProviders } from '../../Models/slots_Models';

@Component({
  selector: 'app-slot-provider-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-provider-menu.component.html',
  styleUrl: './slot-provider-menu.component.scss',
})
export class SlotProviderMenuComponent {
  public showMoreProviders: boolean = false;
  @Input({ required: true }) providersList: IProviders[] = [];
  @Input() selectedProviderIndex!: number | null;
  @Output() onClickProviderItem: EventEmitter<{
    provider: string;
    index: number;
  }> = new EventEmitter();

  public onClickProvider(provider: string, index: number) {
    this.onClickProviderItem.emit({ provider, index });
  }
}
