import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService, Mission } from '../spacex.service'; 

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission: Mission = { // Initialized mission with empty object
    flight_number: 0,
    mission_name: '',
    launch_year: '',
    launch_success: false,
    details: '',
    links: {
      mission_patch_small: ''
    },
    rocket: {
      rocket_id: '',
      rocket_name: '',
      rocket_type: ''
    },
    launch_site: {
      site_id: '',
      site_name: '',
      site_name_long: ''
    }
  };

  constructor(private route: ActivatedRoute, private spacexService: SpacexService) { }

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    if (flightNumber) {
      this.spacexService.getMissionDetails(flightNumber).subscribe((data: Mission) => {
        this.mission = data;
      });
    }
  }
}
