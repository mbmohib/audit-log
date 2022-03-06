interface AuditLog {
  auditId: string;
  siteId: string;
  name: string;
  createdBy: string;
  changes: {
    [key: string]: {
      old: string;
      new: string;
    };
  };
  eventName: 'INSERT' | 'MODIFY' | 'REMOVE';
  createdAt: Date;
}
