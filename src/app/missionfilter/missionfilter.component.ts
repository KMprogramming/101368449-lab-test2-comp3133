import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpacexService, Mission } from '../spacex.service'; // Import Mission type

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent implements OnInit {
  @Output() filterByYearEvent = new EventEmitter<number>();

  years: number[] = []; // Initialize years array with numbers

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.getYears();
  }

  private getYears(): void {
    this.spacexService.getMissions().subscribe(
      (missions: Mission[]) => {
        if (Array.isArray(missions)) {
          const uniqueYears = [...new Set(missions.map(mission => parseInt(mission.launch_year, 10)))];
          this.years = uniqueYears.sort((a, b) => b - a); // Sort years in descending order
        } else {
          console.error('Invalid missions data:', missions);
        }
      },
      (error: any) => {
        console.error('Error fetching missions:', error);
      }
    );
  }

  filterByYear(event: any): void {
    const year = +event.target.value;
    this.filterByYearEvent.emit(year);
  }  
}
