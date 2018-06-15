import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from './data.service';
import {GridService} from './grid.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DataService, GridService]
})
export class RepositoryModule { }
