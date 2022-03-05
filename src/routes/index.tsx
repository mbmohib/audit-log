import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components';
import { AuditLog } from '../screens';

export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/forms" />} />
        <Route path="/forms" element={<AuditLog />} />
        <Route path="/audit-logs" element={<AuditLog />} />
      </Routes>
    </Layout>
  );
}
