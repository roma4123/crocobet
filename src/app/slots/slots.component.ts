import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { SlotsServiceService } from '../slots-service.service';
import { HttpClientModule } from '@angular/common/http';
import {
  IGamesByProvider,
  IProviders,
  Igames,
  IslotsCategory,
} from '../Models/slots_Models';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgClass, CommonModule],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent implements OnInit, OnDestroy {
  constructor() {}

  private service = inject(SlotsServiceService);
  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  public showMoreProviders: boolean = false;
  public selectedCategoryIndex = signal<number | null>(0);
  public selectedProviderIndex = signal<number | null>(null);

  public categoryList = signal<IslotsCategory[]>([]);
  public providersList = signal<IProviders[]>([]);
  public visibleGames = signal<Igames[] | IGamesByProvider[]>([]);

  ngOnInit(): void {
    this.getSlotswithCategory();
    this.getProviders();
  }

  public getProviders(): void {
    this.service
      .getProviders()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        (res) => {
          this.providersList.set(res.data);
        },
        (error) => {
          console.log(error);
          this.providersList.set([]);
        }
      );
  }

  public getSlotswithCategory(): void {
    this.service
      .getSlotsWithCategory()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        (res) => {
          console.log(res.data);
          this.categoryList.set(res.data);
          this.visibleGames.set(res.data[0].games);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public getSlotsByProvider(provider: string): void {
    this.service
      .getSlotsByProvider(provider)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        (res) => {
          this.visibleGames.set(res.data.games);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public onClickCategory(index: number): void {
    this.visibleGames.set(this.categoryList()[index].games as Igames[]);
    this.selectedCategoryIndex.set(index);
    this.selectedProviderIndex.set(null);
  }

  public onClickProvider(provider: string, index: number): void {
    this.selectedCategoryIndex.set(null);
    this.selectedProviderIndex.set(index);
    this.getSlotsByProvider(provider);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}
