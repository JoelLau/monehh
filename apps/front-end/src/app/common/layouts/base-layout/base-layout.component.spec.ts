import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import { BaseLayoutComponent } from './base-layout.component';

const TEST_IDS = {
  root: 'base-layout-root',
  pageTitle: 'page-title',
};

describe('BaseLayoutComponent', () => {
  test('should render', async () => {
    await render(BaseLayoutComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    expect(screen.getByTestId(TEST_IDS.root)).toBeInTheDocument();
  });

  describe('rendering page title', () => {
    const headerText = 'example page title';

    test('should render text when title is available', async () => {
      await render(BaseLayoutComponent, {
        componentProperties: {
          headerText,
        },
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });

      expect(screen.getByRole('heading')).toBeInTheDocument();
      expect(screen.getByText(headerText)).toBeInTheDocument();
    });

    test('should NOT render text when title is available', async () => {
      await render(BaseLayoutComponent, {
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });

      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
      expect(screen.queryByText(headerText)).not.toBeInTheDocument();
    });
  });
});
