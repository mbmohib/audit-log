import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { DetailsIcon } from '../assets/icons';
import { Container, Paper, Table, Typography } from '../components';
import { useGetSites } from '../services/site.api';

const columns: Column<keyof Partial<Site>>[] = [
  { field: 'siteId', headerName: 'Site ID' },
  {
    field: 'userName',
    headerName: 'User',
  },
  {
    field: 'latitude',
    headerName: 'Latitude',
  },
  {
    field: 'longitude',
    headerName: 'Longitude',
  },
  {
    field: 'address',
    headerName: 'Address',
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    render: item => format(new Date(item), 'dd-MM-yyyy'),
  },
  {
    field: 'updatedAt',
    headerName: 'Created at',
    render: item => format(new Date(item), 'dd-MM-yyyy'),
  },
  {
    field: 'siteId',
    headerName: 'Details',
    align: 'right',
    render: item => (
      <Link to={`/sites/${item}`}>
        <DetailsIcon />
      </Link>
    ),
  },
];

export default function AuditLog() {
  const { data, isError } = useGetSites();

  if (isError) {
    return <p>Sorry! We have hit an error! Please try again</p>;
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
