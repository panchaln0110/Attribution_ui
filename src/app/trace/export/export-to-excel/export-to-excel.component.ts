import {Component, Input, OnInit} from '@angular/core';
import {GridService} from '../../repository/grid.service';
import {DataService} from '../../repository/data.service';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-export-to-excel',
  templateUrl: './export-to-excel.component.html',
  styleUrls: ['./export-to-excel.component.css']
})
export class ExportToExcelComponent implements OnInit {
  @Input() gridApi: any;

  constructor(private _dataserviceService: DataService,
              private  _gridService: GridService) {
  }

  ngOnInit() {
  }

  getdataexport() {
    return this._gridService.gridApi.exportDataAsExcel(); //export to excel resolve
  }
}
/*this.config*/
