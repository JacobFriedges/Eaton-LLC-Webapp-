import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.scss'
})
export class InviteComponent {
  constructor(public dialogRef:MatDialogRef<InviteComponent>)
  { 
    
  }
  
  closepopup()
  { 
    this.dialogRef.close()
  }
  
 

  
}
