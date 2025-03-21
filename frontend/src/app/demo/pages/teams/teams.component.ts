import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { InviteComponent } from './invite/invite.component';
import { MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  imports: [SharedModule],
})
export class TeamsComponent {
  teams = [
    { 
      name: 'John Doe', title: 'Partner', email: 'abcd@gmail.com', phone: '123-456-7890',
      
    }
  
  ]
  constructor(public dialog:MatDialog){ 
}
  
  Openpopup(){ 
    this.dialog.open(InviteComponent, 
      { 
        width: '85%',
      });
  }
}
