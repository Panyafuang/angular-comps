import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModesHomeComponent } from './modes-home/modes-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    ModesHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ModsModule { }
