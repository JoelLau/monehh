import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ExpensesPageComponent } from './expenses-page.component';

const CSS_SELECTORS = {
  baseLayout: 'mn-base-layout',
};

describe('ExpensesPageComponent', () => {
  let component: ExpensesPageComponent;
  let fixture: ComponentFixture<ExpensesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the base layout', () => {
    const { debugElement } = fixture;
    const baseLayoutComponent = debugElement.query(
      By.css(CSS_SELECTORS.baseLayout)
    );

    expect(baseLayoutComponent).toBeTruthy();
  });
});
