import { Box, Container } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { format } from 'date-fns';

import { Layout } from '../components';
import { useGetAuditLogs } from '../services/audit-log.api';

const columns: GridColDef[] = [
  { field: 'siteId', headerName: 'Site ID', width: 150 },
  {
    field: 'userId',
    headerName: 'User ID',
    width: 150,
  },
  {
    field: 'eventName',
    headerName: 'Event Name',
    flex: 0.7,
  },
  {
    field: 'timestamp',
    headerName: 'Created at',
    type: 'date',
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      format(new Date(params.row.timestamp), 'dd-MM-yyyy hh:mm a'),
  },
];

export default function AuditLog() {
  const { data } = useGetAuditLogs();

  return (
    <Layout>
      <Container>
        <Box mt={8} height={400} width="100%">
          <DataGrid
            rows={data || []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={row => row.siteId}
          />
        </Box>
      </Container>
    </Layout>
  );
}
