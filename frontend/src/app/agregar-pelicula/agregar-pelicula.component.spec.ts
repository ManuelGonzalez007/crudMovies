import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPeliculaComponent } from './agregar-pelicula.component';

describe('AgregarPeliculaComponent', () => {
  let component: AgregarPeliculaComponent;
  let fixture: ComponentFixture<AgregarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
