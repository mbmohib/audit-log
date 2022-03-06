import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockConsole from 'jest-mock-console';

import { site as fakeSite } from '../../mocks/db/site.db';
import { server } from '../../mocks/server';
import * as siteApi from '../../services/site.api';
import { render } from '../../utils/test';
import SiteForm from '../site-form';

let restoreConsole: { (): void; (): void };

beforeAll(() => {
  restoreConsole = mockConsole();
  server.listen();
});
afterAll(() => {
  server.close();
  restoreConsole();
});
afterEach(() => {
  server.resetHandlers();
});

test('render SiteForm', async () => {
  const handleFormSubmit = jest.fn();
  render(<SiteForm handleFormSubmit={handleFormSubmit} />);

  const name = screen.getByLabelText(/name/i);
  userEvent.type(name, fakeSite.name as string);

  await waitFor(() => {
    expect(name).toHaveValue(fakeSite.name);
  });
});
