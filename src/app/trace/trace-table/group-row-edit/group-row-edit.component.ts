import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DataService} from '../../repository/data.service';


@Component({
  selector: 'app-group-row-edit',
  templateUrl: './group-row-edit.component.html',
  styleUrls: ['./group-row-edit.component.css']
})
export class GroupRowEditComponent implements OnInit {
  @Input() columnDefs;
  @Input() rowData;
  cdata: any;
  rowEditForm: FormGroup;
  fields: any[] = [];
  isFormAvailable: boolean = false;

  constructor(private fb: FormBuilder, private _dataservice: DataService) {
  }


  ngOnInit() {
    console.log(this.columnDefs, this.rowData);
    for (const k in this.columnDefs) {
      if (this.columnDefs[k].editable === true) {
        this.fields.push(this.columnDefs[k]);
      }
    }

  }

  showModal(modal) {
    this.isFormAvailable = true;
    modal.show();
    this.createForm();

  }

  createForm() {
    const controls = {};
    for (const k in this.fields) {
      if (k) {
        const field = this.fields[k]['field'];
        const fieldValue = this.rowData[0][this.fields[k]['field']];
        controls[field] = [fieldValue];
      }
    }
    this.rowEditForm = this.fb.group(controls);


  }

  onSubmit(form) {
    console.log(form.value);

    //this.rowData

    //this._dataservice.updateRows(form.value);
  }

  /*onSave() {
    this.myform.valueChanges.subscribe(val => {
      this.cdata = val;
    });
    console.log(this.cdata);
  }*/

}
