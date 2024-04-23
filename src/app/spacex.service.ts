import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_success: boolean;
  details: string;
  links: {
    mission_patch_small: string;
  };
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  getMissionDetails(flightNumber: string): Observable<Mission> {
    const url = `${this.baseUrl}/${flightNumber}`;
    return this.http.get<Mission>(url);
  }
}
