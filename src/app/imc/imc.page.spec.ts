import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IMCPage } from './imc.page';

describe('IMCPage', () => {
  let component: IMCPage;
  let fixture: ComponentFixture<IMCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IMCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
