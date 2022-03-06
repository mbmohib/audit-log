import { Box, Container, Paper, SiteForm } from '../components';
import { useCreateSite } from '../services/site.api';

const initialState = {
  name: '',
  address: '',
  description: '',
  latitude: '',
  longitude: '',
};

export default function SiteCreate() {
  const { mutate } = useCreateSite();

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
          <SiteForm
            initialState={initialState}
            handleFormSubmit={handleFormSubmit}
          />
        </Paper>
      </Box>
    </Container>
  );
}
