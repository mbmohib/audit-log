import { rest } from 'msw';

import { apiEndpoint } from '../config';
import { createSite, getAuditLogs, getSite, getSites, updateSite } from './api';

export default [
  rest.get(`${apiEndpoint}/audit-logs`, getAuditLogs),

  rest.get(`${apiEndpoint}/sites`, getSites),
  rest.get(`${apiEndpoint}/sites/:id`, getSite),
  rest.post(`${apiEndpoint}/sites`, createSite),
  rest.put(`${apiEndpoint}/sites/:id`, updateSite),
];
