import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import { ExpensesPageComponent } from './expenses-page.component';

const TEST_IDS = {
  baseLayout: 'base-layout',
  pageContents: 'page-contents',
};

describe('ExpensesPageComponent', () => {
  it('should render', async () => {
    await render(ExpensesPageComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    expect(screen.getByTestId(TEST_IDS.baseLayout)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_IDS.pageContents)).toBeInTheDocument();
  });
});
