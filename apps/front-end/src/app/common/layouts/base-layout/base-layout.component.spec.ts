import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import { BaseLayoutComponent } from './base-layout.component';

const TEST_IDS = {
  root: 'base-layout-root',
};

describe('BaseLayoutComponent', () => {
  test('should render', async () => {
    await render(BaseLayoutComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    expect(screen.queryByTestId(TEST_IDS.root)).toBeInTheDocument();
  });
});
