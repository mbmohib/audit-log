import { Box, Container } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Layout } from '../components';

const columns: GridColDef[] = [
  { field: 'siteId', headerName: 'Site ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User ID',
    width: 150,
  },
  {
    field: 'eventName',
    headerName: 'Event Name',
    width: 150,
  },
  {
    field: 'timestamp',
    headerName: 'Created at',
    type: 'date',
    width: 110,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows: AuditLog = [];

export default function DataGridDemo() {
  return (
    <Layout>
      <Container>
        <Box mt={8} height={400} width="100%">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </Container>
    </Layout>
  );
}
