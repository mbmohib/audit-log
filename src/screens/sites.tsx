import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DetailsIcon } from '../assets/icons';
import {
  Box,
  Container,
  Paper,
  PreLoader,
  Table,
  Typography,
} from '../components';
import { useGetSites } from '../services/site.api';

const CreateButton = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 16px;
  border: 1px solid;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 8px;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary200};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const columns: Column<keyof Partial<Site>>[] = [
  {
    field: 'name',
    headerName: 'Site Name',
    width: '200px',
  },
  {
    field: 'createdBy',
    headerName: 'User',
    width: '200px',
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
    width: '250px',
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    render: item => (item ? format(new Date(item), 'dd-MM-yyyy') : ''),
  },
  {
    field: 'updatedAt',
    headerName: 'Created at',
    render: item => (item ? format(new Date(item), 'dd-MM-yyyy') : ''),
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
    width: '60px',
  },
];

export default function AuditLog() {
  const { data, isError, isLoading } = useGetSites();

  if (isError) {
    return (
      <Typography role="alert" color="error">
        Sorry! We have hit an error! Please try again
      </Typography>
    );
  }

  return (
    <Container>
      <PreLoader isLoading={isLoading}>
        <Box display="flex" mb={2} justifyContent="space-between">
          <Typography variant="header1">Site</Typography>
          <CreateButton to="/sites/create">Create New</CreateButton>
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
