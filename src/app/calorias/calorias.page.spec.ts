import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaloriasPage } from './calorias.page';

describe('CaloriasPage', () => {
  let component: CaloriasPage;
  let fixture: ComponentFixture<CaloriasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaloriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
