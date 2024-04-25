export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_success: boolean;
    details: string;
    links: {
      mission_patch_small: string;
    };
    rocket: { // Assuming this is the structure based on the SpaceX API
      rocket_id: string;
      rocket_name: string;
      rocket_type: string;
    };
    launch_site: {
      site_id: string;
      site_name: string;
      site_name_long: string;
    };
    // Include other properties as needed based on the SpaceX API
  }
  