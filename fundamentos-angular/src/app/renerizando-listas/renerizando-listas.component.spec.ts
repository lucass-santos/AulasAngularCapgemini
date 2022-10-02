import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenerizandoListasComponent } from './renerizando-listas.component';

describe('RenerizandoListasComponent', () => {
  let component: RenerizandoListasComponent;
  let fixture: ComponentFixture<RenerizandoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenerizandoListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenerizandoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
