import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexService, Mission } from '../spacex.service'; // Import Mission type
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit, OnDestroy {
  missions: Mission[] = [];
  missionSubscription: Subscription | undefined = undefined; // Initialize missionSubscription

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.missionSubscription = this.spacexService.getMissions().subscribe({
      next: (data: Mission[]) => {
        this.missions = data;
      },
      error: (error: any) => {
        console.error('Error fetching missions:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.missionSubscription) {
      this.missionSubscription.unsubscribe();
    }
  }
}
