import { useNavigate } from 'react-router-dom';

import { Box, Container, Paper, SiteForm, Typography } from '../components';
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
  const navigate = useNavigate();

  const handleFormSubmit = (values: SiteForm) => {
    mutate(
      {
        data: values,
      },
      {
        onSuccess: () => {
          navigate('/sites');
        },
      },
    );
  };

  return (
    <Container>
      <Box width="600px" mx="auto">
        <Box display="flex" mb={2} justifyContent="space-between">
          <Typography variant="header1">Site</Typography>
        </Box>
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
