import { build, fake, oneOf, sequence } from '@jackfranklin/test-data-bot';

export const auditLogBuilder = build('AuditLog', {
  fields: {
    siteId: sequence(),
    userId: sequence(),
    eventName: oneOf('INSERT', 'MODIFY', 'REMOVE'),
    timestamp: fake(f => f.time.recent('unix')),
  },
});

export const auditLogs = [
  auditLogBuilder(),
  auditLogBuilder(),
  auditLogBuilder(),
  auditLogBuilder(),
  auditLogBuilder(),
] as AuditLog[];
export const auditLog = auditLogBuilder() as AuditLog;
