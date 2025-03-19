import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TeamRoutingModule } from './team-routing.module';
import { MaterialModule } from './material/material.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';



@NgModule({
  declarations: [DialogExampleComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MaterialModule
  ],

})
export class TeamModule { }
