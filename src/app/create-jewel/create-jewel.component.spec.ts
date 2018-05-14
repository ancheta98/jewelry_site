import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJewelComponent } from './create-jewel.component';

describe('CreateJewelComponent', () => {
  let component: CreateJewelComponent;
  let fixture: ComponentFixture<CreateJewelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJewelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
