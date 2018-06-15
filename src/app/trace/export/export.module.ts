import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportToExcelComponent } from './export-to-excel/export-to-excel.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExportToExcelComponent, DemoModalComponent],
  exports: [ExportToExcelComponent, DemoModalComponent]

})
export class ExportModule { }
