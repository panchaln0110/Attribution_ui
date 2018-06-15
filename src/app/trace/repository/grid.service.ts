import {Injectable} from '@angular/core';

@Injectable()
export class GridService {

  gridApi: any;
  private range: any;
  private cellValue: any;
  private Colid: any;

  constructor() {
  }

  getGridAPI() {
    return this.gridApi;
  }

  setGridAPI(gridApi): void {
    this.gridApi = gridApi;
  }

  getColumnDef() {
    return [{headerName: 'Trade Type', field: 'TradeType', filter: 'agTextColumnFilter', editable: true, enableRowGroup: true},
      {headerName: 'Violation Reason', field: 'ViolationReason', filter: 'agTextColumnFilter', editable: true, enableRowGroup: true},
      {headerName: 'Sales Response', field: 'SalesResponse', filter: 'agTextColumnFilter', editable: true},
      {headerName: 'Trader Response', field: 'TraderResponse', filter: 'agTextColumnFilter', editable: true},
      {headerName: 'Operations Response', field: 'OperationsResponse', filter: 'agTextColumnFilter'},
      {headerName: 'Committee Response', field: 'CommitteeResponse', filter: 'agTextColumnFilter'},
      {headerName: 'Open Trade Type', field: 'OpenTradeType', filter: 'agTextColumnFilter'},
      {headerName: 'Execution Time', field: 'ExecutionTime', filter: 'agNumberColumnFilter'},
      {headerName: 'Time Late', field: 'TimeLate', filter: 'agTextColumnFilter'}
    ];
  }


  OnCellClicked(event: any) {
    const colVal = event.value;
    this.Colid = event.column.colId;
    console.log('cell -', colVal);
    this.cellValue = colVal;
  }

  OnRangeSelection(event: any) {
    this.gridApi.stopEditing();
    const rangeSelections = this.gridApi.getRangeSelections();
    const firstRange = rangeSelections[0];
    const startIndex = firstRange.start.rowIndex;
    const endIndex = firstRange.end.rowIndex;

    for (let k = startIndex + 1; k <= endIndex; k++) {
      if (firstRange.columns[0].colId === this.Colid) {
        const row = this.gridApi.getDisplayedRowAtIndex(k).setDataValue(
          firstRange.columns[0].colId, this.cellValue
        );
      }
    }
  }

  OnCellEditingStopped(event) {
    this.cellValue = event.value;
  }


}
