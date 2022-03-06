import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components';
import {
  AuditLog,
  AuditLogDetails,
  SiteCreate,
  SiteUpdate,
  Sites,
} from '../screens';

export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/sites" />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/sites/create" element={<SiteCreate />} />
        <Route path="/sites/:id" element={<SiteUpdate />} />
        <Route path="/audit-logs" element={<AuditLog />} />
        <Route path="/audit-logs/:id" element={<AuditLogDetails />} />
      </Routes>
    </Layout>
  );
}
