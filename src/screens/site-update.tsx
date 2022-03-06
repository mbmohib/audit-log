import { useParams } from 'react-router-dom';

import { Box, Container, Paper, PreLoader, SiteForm } from '../components';
import { useGetSite, useUpdateSite } from '../services/site.api';

export default function SiteCreate() {
  const { id } = useParams();
  const getSite = useGetSite(id);
  const { mutate, isLoading } = useUpdateSite(id);

  const handleFormSubmit = (
    values: Omit<
      Site,
      'siteId' | 'userId' | 'createdAt' | 'updatedAt' | 'userName'
    >,
  ) => {
    mutate({
      data: values,
    });
  };

  return (
    <Container>
      <Box width="600px" mx="auto">
        <Paper>
          <PreLoader isLoading={getSite.isLoading}>
            <SiteForm
              isLoading={isLoading}
              initialState={getSite.data}
              handleFormSubmit={handleFormSubmit}
            />
          </PreLoader>
        </Paper>
      </Box>
    </Container>
  );
}
