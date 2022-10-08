import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraPaginaComponent } from './primera-pagina.component';

describe('PrimeraPaginaComponent', () => {
  let component: PrimeraPaginaComponent;
  let fixture: ComponentFixture<PrimeraPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
