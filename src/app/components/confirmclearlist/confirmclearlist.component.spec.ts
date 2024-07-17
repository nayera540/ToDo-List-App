import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmclearlistComponent } from './confirmclearlist.component';

describe('ConfirmclearlistComponent', () => {
  let component: ConfirmclearlistComponent;
  let fixture: ComponentFixture<ConfirmclearlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmclearlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmclearlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
