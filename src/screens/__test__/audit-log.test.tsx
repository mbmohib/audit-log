import { screen, waitFor } from '@testing-library/react';

import { auditLogs } from '../../mocks/db';
import { server } from '../../mocks/server';
import * as auditLogApi from '../../services/audit-log.api';
import { render } from '../../utils/test';
import AuditLog from '../audit-log';

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
});

test('render audit logs table', async () => {
  render(<AuditLog />);

  await waitFor(() => {
    auditLogs.forEach(auditLog => {
      expect(screen.getByText(auditLog.siteId));
      expect(screen.getByText(auditLog.userId));
    });
  });
});

test('show error message if API request failed', () => {
  /*
    TODO: figure out why msw js error code not working
    server.use(rest.get('/radios', radioRequestFailed));
  */

  // @ts-expect-error: Unreachable code error
  jest.spyOn(auditLogApi, 'useGetAuditLogs').mockImplementation(() => ({
    isError: true,
  }));

  render(<AuditLog />);

  expect(screen.getByRole('alert')).toHaveTextContent(/error/i);
});
