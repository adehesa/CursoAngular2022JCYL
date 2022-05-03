import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPaginadorComponent } from './fila-paginador.component';

describe('FilaPaginadorComponent', () => {
  let component: FilaPaginadorComponent;
  let fixture: ComponentFixture<FilaPaginadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaPaginadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaPaginadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
