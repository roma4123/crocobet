import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import {
  IGetProviders,
  IGetSlotsByProviders,
  IGetslotsCategory,
  IProviders,
  IslotsByProvider,
  IslotsCategory,
} from './Models/slots_Models';

@Injectable({
  providedIn: 'root',
})
export class SlotsServiceService {
  private baseUrl: string = 'https://cms.crocobet.com/integrations';
  private slotsCategories = 'v2/slot/categories?include=games';
  private providers = 'type=slot&platform=desktop';
  private slotsByProvider = 'v2/slot/providers';
  constructor(private http: HttpClient) {}

  getSlotsWithCategory(): Observable<IGetslotsCategory> {
    return this.http
      .get<IGetslotsCategory>(`${this.baseUrl}/${this.slotsCategories}`)
      .pipe(
        map((res) => {
          let temp = res.data.filter((item) =>
            item.category?.toLowerCase().startsWith('web:')
          );
          return { data: temp };
        })
      );
  }

  getProviders(): Observable<IGetProviders> {
    return this.http.get<IGetProviders>(`${this.baseUrl}?${this.providers}`);
  }

  getSlotsByProvider(provider: string): Observable<IGetSlotsByProviders> {
    return this.http.get<IGetSlotsByProviders>(
      `${this.baseUrl}/${this.slotsByProvider}/${provider}`
    );
  }
}
