import { Alert, Container, Typography } from '@mui/material';
import { format } from 'date-fns';

import { Paper, Table } from '../components';
import { useGetAuditLogs } from '../services/audit-log.api';

const columns: Column<keyof AuditLog>[] = [
  { field: 'siteId', headerName: 'Site ID' },
  {
    field: 'userId',
    headerName: 'User ID',
  },
  {
    field: 'eventName',
    headerName: 'Event Name',
  },
  {
    field: 'timestamp',
    headerName: 'Created at',
    type: 'date',
    render: item => format(new Date(item), 'dd-MM-yyyy hh:mm a'),
  },
];

export default function AuditLog() {
  const { data, isError } = useGetAuditLogs();

  if (isError) {
    return (
      <Alert severity="error">
        Sorry! We have hit an error! Please try again
      </Alert>
    );
  }

  return (
    <Container>
      {data && data.length ? (
        <Paper>
          <Table rows={data || []} columns={columns} />
        </Paper>
      ) : (
        <Typography>No data found!</Typography>
      )}
    </Container>
  );
}
