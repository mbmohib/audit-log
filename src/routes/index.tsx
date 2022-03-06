import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components';
import { AuditLog, SiteCreate, Sites } from '../screens';

export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/forms" />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/sites/create" element={<SiteCreate />} />
        <Route path="/audit-logs" element={<AuditLog />} />
      </Routes>
    </Layout>
  );
}
