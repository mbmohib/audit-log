import { ResponseComposition, RestContext, RestRequest } from 'msw';

import { auditLog, auditLogs } from '../db';

export const getAuditLogs = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(200), ctx.json(auditLogs));

export const getAuditLog = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  const { id } = req.params;

  const auditLogData = auditLogs.find(item => item.auditId === id) || auditLog;

  return res(ctx.status(200), ctx.json(auditLogData));
};

export const auditLogsFailed = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) =>
  res(ctx.status(500), ctx.json({ data: { error: 'Internal server error' } }));
