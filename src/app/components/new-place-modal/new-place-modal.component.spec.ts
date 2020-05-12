import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlaceModalComponent } from './new-place-modal.component';

describe('NewPlaceModalComponent', () => {
  let component: NewPlaceModalComponent;
  let fixture: ComponentFixture<NewPlaceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlaceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
