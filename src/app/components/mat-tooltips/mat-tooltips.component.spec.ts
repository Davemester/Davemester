import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTooltipsComponent } from './mat-tooltips.component';

describe('MatTooltipsComponent', () => {
  let component: MatTooltipsComponent;
  let fixture: ComponentFixture<MatTooltipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTooltipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
