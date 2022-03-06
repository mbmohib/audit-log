import { build, fake, oneOf, sequence } from '@jackfranklin/test-data-bot';

export const auditLogBuilder = build('AuditLog', {
  fields: {
    auditId: sequence(),
    siteId: sequence(),
    name: fake(f => f.company.companyName()),
    createdBy: fake(f => f.name.findName()),
    changes: {
      name: {
        old: fake(f => f.name.findName()),
        new: fake(f => f.name.findName()),
      },
      latitude: {
        old: fake(f => f.address.latitude()),
        new: fake(f => f.address.latitude()),
      },
      longitude: {
        old: fake(f => f.address.longitude()),
        new: fake(f => f.address.longitude()),
      },
    },
    eventName: oneOf('INSERT', 'MODIFY', 'REMOVE'),
    createdAt: fake(f => f.time.recent('unix')),
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
