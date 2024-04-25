//Karl Macayan 101368449


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceXService } from '../spacex-api.service';
import { Launch } from '../launch.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  standalone: true,
  styleUrls: ['./missiondetails.component.scss'],
  imports: [ NgIf]
})
export class MissiondetailsComponent implements OnInit {
  flightNumber: string = '';
  mission: Launch | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private spacexService: SpaceXService) { }

  ngOnInit(): void {
    // Gets flightNumber from route parameters
    this.route.params.subscribe(params => {
      this.flightNumber = params['flightNumber'];
      // Call API to fetch mission details
      this.fetchMissionDetails();
    });
  }

  fetchMissionDetails(): void {
    if (this.flightNumber) {
      this.spacexService.getLaunchByFlightNumber(this.flightNumber)
        .subscribe(
          (mission) => {
            this.mission = mission;
          },
          (error) => {
            console.error('Error fetching mission details:', error);
          }
        );
    }
  }

  navigateBack(): void {
    this.router.navigate(['/missions']);
  }
}




