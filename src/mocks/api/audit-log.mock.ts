import { ResponseComposition, RestContext, RestRequest } from 'msw';

import { auditLogs } from '../db';

export const getAuditLogs = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(200), ctx.json(auditLogs));

export const auditLogsFailed = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) =>
  res(ctx.status(500), ctx.json({ data: { error: 'Internal server error' } }));
