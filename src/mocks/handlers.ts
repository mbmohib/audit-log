import { rest } from 'msw';

import { apiEndpoint } from '../config';
import { getAuditLogs, getSite, getSites } from './api';

export default [
  rest.get(`${apiEndpoint}/audit-logs`, getAuditLogs),
  rest.get(`${apiEndpoint}/sites`, getSites),
  rest.get(`${apiEndpoint}/sites/:id`, getSite),
];
