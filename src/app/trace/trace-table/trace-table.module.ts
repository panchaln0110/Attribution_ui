import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnFilterComponent } from './column-filter/column-filter.component';
import { RowEditorComponent } from './row-editor/row-editor.component';
import { RangeEditorComponent } from './range-editor/range-editor.component';
import { GroupRowEditComponent } from './group-row-edit/group-row-edit.component';
import {ExportModule} from '../export/export.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ExportModule,
    ReactiveFormsModule
  ],
  declarations: [ColumnFilterComponent, RowEditorComponent, RangeEditorComponent, GroupRowEditComponent],
  exports: [RangeEditorComponent, GroupRowEditComponent]
})
export class TraceTableModule { }
