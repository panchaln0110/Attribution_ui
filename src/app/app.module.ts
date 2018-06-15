import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import {RepositoryModule} from './trace/repository/repository.module';
import {DataService} from './trace/repository/data.service';
import {ExportModule} from './trace/export/export.module';
import {TraceTableModule} from './trace/trace-table/trace-table.module';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import 'ag-grid-enterprise';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RepositoryModule,
    ExportModule,
    TraceTableModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
