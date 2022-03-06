import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import {
  Box,
  Container,
  Paper,
  PreLoader,
  SiteForm,
  Typography,
} from '../components';
import { useGetSite, useUpdateSite } from '../services/site.api';

export default function SiteCreate() {
  const { id } = useParams();
  const { data, isLoading: isSiteLoading } = useGetSite(id);
  const { mutate, isLoading } = useUpdateSite(id);

  const handleFormSubmit = (values: SiteForm) => {
    mutate({
      data: values,
    });
  };

  return (
    <Container>
      <Box width="600px" mx="auto">
        <Box display="flex" mb={2} justifyContent="space-between">
          <Typography variant="header1">Site Details</Typography>
        </Box>
        <Paper>
          <Typography variant="header2" as="h1" mb={3}>
            Site ID: {data?.siteId}
          </Typography>
          <PreLoader isLoading={isSiteLoading}>
            <SiteForm
              isLoading={isLoading}
              initialState={data}
              handleFormSubmit={handleFormSubmit}
            />

            {data && (
              <Box mt={4}>
                <Box borderBottom="1px solid" borderColor="gray200" mb={2}>
                  <Typography variant="header3" as="h2">
                    Audit Log
                  </Typography>
                </Box>
                <Typography>
                  Created by {data?.createdBy} on{' '}
                  {format(
                    new Date(data?.createdAt as Date),
                    'dd-MM-yyyy hh:mm a',
                  )}
                </Typography>
                {data?.lastUpdatedBy && (
                  <Typography>
                    Updated by {data?.lastUpdatedBy} on{' '}
                    {format(
                      new Date(data?.updatedAt as Date),
                      'dd-MM-yyyy hh:mm a',
                    )}
                  </Typography>
                )}
              </Box>
            )}
          </PreLoader>
        </Paper>
      </Box>
    </Container>
  );
}
