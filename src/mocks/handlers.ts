import { rest } from 'msw';

import { apiEndpoint } from '../config';
import { getAuditLogs } from './api';

export default [rest.get(`${apiEndpoint}/audit-logs`, getAuditLogs)];
