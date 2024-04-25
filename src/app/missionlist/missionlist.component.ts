import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SpaceXService } from '../spacex-api.service';
import { Launch } from '../launch.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss'],
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  selectedYear: string = '';
  launchSuccess: boolean = true; // Add boolean for launch success

  constructor(private spacexService: SpaceXService, private router: Router) {}

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    this.spacexService.getLaunches().subscribe((launches) => {
      this.launches = launches;
      this.filteredLaunches = this.launches;
    });
  }

  filterLaunchesBySuccess(success: boolean): void { // Function to filter launches by success
    this.launchSuccess = success;
    this.filteredLaunches = this.launches.filter(launch => launch.launch_success === success);
  }

  goToMissionDetails(flightNumber: string): void {
    this.router.navigate(['/missiondetails', flightNumber]);
  }

  navigateToFilterMissions(): void {
    this.router.navigate(['/filtermissions']);
  }
}

