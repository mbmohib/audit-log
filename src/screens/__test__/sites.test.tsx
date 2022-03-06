import { screen, waitFor } from '@testing-library/react';

import { sites } from '../../mocks/db';
import { server } from '../../mocks/server';
import * as siteApi from '../../services/site.api';
import { render } from '../../utils/test';
import Sites from '../sites';

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
});

test('render sites table', async () => {
  render(<Sites />);

  await waitFor(() => {
    sites.forEach(site => {
      expect(screen.getByText(site.name));
    });
  });
});

test('show error message if API request failed', () => {
  /*
    TODO: figure out why msw js error code not working
    server.use(rest.get('/radios', radioRequestFailed));
  */

  // @ts-expect-error: Unreachable code error
  jest.spyOn(siteApi, 'useGetSites').mockImplementation(() => ({
    isError: true,
  }));

  render(<Sites />);

  expect(screen.getByRole('alert')).toHaveTextContent(/error/i);
});
