import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

const TEST_IDS = {
  root: 'router-outlet',
};

describe('AppComponent', () => {
  test('should render router-outlet', async () => {
    await render(AppComponent, { schemas: [CUSTOM_ELEMENTS_SCHEMA] });

    expect(screen.getByTestId(TEST_IDS.root)).toBeInTheDocument();
  });
});
