import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { DetailsIcon } from '../assets/icons';
import {
  Box,
  Container,
  Paper,
  PreLoader,
  Table,
  Typography,
} from '../components';
import { useGetAuditLogs } from '../services/audit-log.api';

const columns: Column<keyof Partial<AuditLog>>[] = [
  {
    field: 'name',
    headerName: 'Site Name',
    width: '250px',
  },
  {
    field: 'createdBy',
    headerName: 'User',
    width: '250px',
  },
  {
    field: 'eventName',
    headerName: 'Event Name',
    width: '200px',
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    render: item => format(new Date(item), 'dd-MM-yyyy hh:mm a'),
    width: '200px',
  },
  {
    field: 'auditId',
    headerName: 'Details',
    align: 'right',
    render: item => (
      <Link to={`/audit-logs/${item}`}>
        <DetailsIcon />
      </Link>
    ),
  },
];

export default function AuditLog() {
  const { data, isError, isLoading } = useGetAuditLogs();

  if (isError) {
    return <p>Sorry! We have hit an error! Please try again</p>;
  }

  return (
    <Container>
      <PreLoader isLoading={isLoading}>
        <Box display="flex" mb={2} justifyContent="space-between">
          <Typography variant="header1">Audit Logs</Typography>
        </Box>
        {data && data.length ? (
          <Paper>
            <Table rows={data || []} columns={columns} />
          </Paper>
        ) : (
          <Typography>No data found!</Typography>
        )}
      </PreLoader>
    </Container>
  );
}
