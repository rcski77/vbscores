import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScoresComponent } from './edit-scores.component';

describe('EditScoresComponent', () => {
  let component: EditScoresComponent;
  let fixture: ComponentFixture<EditScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
