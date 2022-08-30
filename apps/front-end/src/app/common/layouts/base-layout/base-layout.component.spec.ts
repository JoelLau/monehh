import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NGZORRO_MODULES } from '../../constants/ng-zorro';
import { BaseLayoutComponent } from './base-layout.component';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...NGZORRO_MODULES],
      declarations: [BaseLayoutComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('title element rendering', () => {
    it('should render title when title is truthy', () => {
      component.title = 'SOME S4MPL3 TiTLe?!';
      fixture.detectChanges();

      const { debugElement } = fixture;
      const header = debugElement.query(
        By.css('[data-testid=page-header]')
      ).nativeElement;

      expect(header).toBeInTheDocument();
      expect(header.textContent).toBe(component.title);
    });

    it('should NOT render title when title is undefined', () => {
      component.title = undefined;
      fixture.detectChanges();

      fixture.debugElement.query(By.css('[data-testid=page-header]'));

      const { debugElement } = fixture;
      const header = debugElement.query(By.css('[data-testid=page-header]'));
      expect(header).not.toBeInTheDocument();
    });

    it("should NOT render title when title is ''", () => {
      component.title = '';
      fixture.detectChanges();

      fixture.debugElement.query(By.css('[data-testid=page-header]'));

      const { debugElement } = fixture;
      const header = debugElement.query(By.css('[data-testid=page-header]'));
      expect(header).not.toBeInTheDocument();
    });
  });
});
