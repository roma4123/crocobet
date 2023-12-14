import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import {
  IGetslotsCategory,
  IProviders,
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

  getSlots(): Observable<IGetslotsCategory> {
    return this.http
      .get<IGetslotsCategory>(`${this.baseUrl}/${this.slotsCategories}`)
      .pipe(
        map((res) => {
          let temp = res.data.filter(
            (item) => item.platform?.toLowerCase() === 'desktop'
          );
          return { data: temp };
        })
      );
  }

  getProviders(): Observable<IProviders[]> {
    return this.http.get<IProviders[]>(`${this.baseUrl}?${this.providers}`);
  }

  getSlotsByProvider(provider: string = 'TPG@bet-construct'): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/${this.slotsByProvider}/${provider}`
    );
  }
}
