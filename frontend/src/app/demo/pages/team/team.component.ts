import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';  // Import the shared module
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-team',
  imports: [SharedModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  teams = [
    { 
      name: 'John Doe', title: 'Partner', email: 'abcd@gmail.com', phone: '123-456-7890',
    },
  ];
  constructor(public dialog: MatDialog) {}
  openDialog() { 
    this.dialog.open(DialogExampleComponent);
  }
}
