import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRowEditComponent } from './group-row-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('GroupRowEditComponent', () => {
  let component: GroupRowEditComponent;
  let fixture: ComponentFixture<GroupRowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ GroupRowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
