import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { SlotsServiceService } from '../slots-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Igames, IslotsCategory } from '../Models/slots_Models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent implements OnInit {
  constructor() {}
  private service = inject(SlotsServiceService);
  public selectedCategory = computed(() => {});
  public categoryData = signal<IslotsCategory[]>([]);
  public Visibleslots = signal<Igames[]>([]);
  ngOnInit(): void {
    // this.service.getProviders().subscribe((v) => console.log(v));
    // this.service.getSlotsByProvider().subscribe((v) => console.log(v));
    this.service.getSlots().subscribe((res) => {
      this.categoryData.set(res.data);
      // this.Visibleslots
    });
  }

  public onClickCategory(item: any): void {
    this.Visibleslots = item.games;
    console.log(item.games);
  }
}
