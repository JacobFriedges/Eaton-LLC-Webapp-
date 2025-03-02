import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';  // Import the shared module
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.scss',
  imports: [SharedModule],  // Include the shared module here
})
export class AllJobsComponent {
  jobs = [
    { jobId: '1234', project: 'I-94', schedule: 'May 16, 2023 - May 17, 2023', customer: 'AMES', material: 'SAND', ordered: '0 / Tons', selected: false },
    { jobId: '5431', project: 'I-34', schedule: 'April 1, 2022 - May 24, 2023', customer: 'ABSC', material: 'CONCRETE', ordered: '0 / Tons', selected: false },
    { jobId: '1122', project: 'I-94', schedule: 'June 10, 2022 - June 12, 2022', customer: 'ABCD', material: 'SAND', ordered: '0 / Tons', selected: false },
    // Add more job data here
  ];

  constructor(private router: Router) {}

  navigateToCreateJob() {
    this.router.navigate(['/all-jobs/create']);
  }

  // Select all checkboxes
  selectAll(event: any): void {
    const isChecked = event.target.checked;
    this.jobs.forEach(job => job.selected = isChecked);
  }

}
