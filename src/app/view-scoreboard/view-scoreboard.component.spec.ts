import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScoreboardComponent } from './view-scoreboard.component';

describe('ViewScoreboardComponent', () => {
  let component: ViewScoreboardComponent;
  let fixture: ComponentFixture<ViewScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScoreboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
