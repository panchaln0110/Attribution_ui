import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GridOptions} from 'ag-grid';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {observable} from 'rxjs/symbol/observable';


@Injectable()
export class DataService {
  @Input() TradeData: any;

  constructor(private http: HttpClient) {
  }


  onGridReady() {
    return this.http.get('assets/data.json');
    /*.subscribe((result) =>{
      this.TradeData = result;
    });*/
  }

  updateRows(data) {
    return this.http.post('assets/data.json', data);
  }

}
