import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from './launch.interface';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.apiUrl);
  }

  getLaunchByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.apiUrl}?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: string): Observable<Launch> {
    return this.http.get<Launch>(`${this.apiUrl}/${flightNumber}`);
  }
}
