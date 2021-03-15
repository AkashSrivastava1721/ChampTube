import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptioncardComponent } from './optioncard.component';

describe('OptioncardComponent', () => {
  let component: OptioncardComponent;
  let fixture: ComponentFixture<OptioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptioncardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
