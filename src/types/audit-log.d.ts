interface AuditLog {
  siteId: string;
  userId: string;
  eventName: 'INSERT' | 'MODIFY' | 'REMOVE';
  timestamp: Date;
}
