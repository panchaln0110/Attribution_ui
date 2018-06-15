import {Component, Input, Output} from '@angular/core';
import {OnInit} from '@angular/core';
import {DataService} from './trace/repository/data.service';
import {GridService} from './trace/repository/grid.service';
import {ExportToExcelComponent} from './trace/export/export-to-excel/export-to-excel.component';
import {DemoModalComponent} from './trace/export/demo-modal/demo-modal.component';
import {RangeEditorComponent} from './trace/trace-table/range-editor/range-editor.component';
import {GroupRowEditComponent} from './trace/trace-table/group-row-edit/group-row-edit.component';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  colDefs;
  rowData: any[] = [];
  gridApi;
  rowSelection;
  rowGroupPanelShow: string;
  data: any;

  constructor(
    private _dataserviceService: DataService,
    private  _gridService: GridService) {
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';

  }

  ngOnInit() {
    this._dataserviceService.onGridReady().subscribe(response => {
      this.rowData = response['TradeData'];
    });
    this.colDefs = this._gridService.getColumnDef();
  }

  onGridReady(params) {
    const event = {params: params};
    this.gridApi = params.api;
    this._gridService.setGridAPI(params.api);
  }

  OnCellClicked(event: any) {
    this.data = event.data;
    this._gridService.OnCellClicked(event);

  }

  OnRangeSelection(event) {
    this._gridService.OnRangeSelection(event);
  }

  OnCellEditingStopped(event) {
    this._gridService.OnCellEditingStopped(event);
  }

  onSelectionChanged(event) {
    this.data = this.gridApi.getSelectedRows();
  }

}
