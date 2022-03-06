import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Box, Button, TextField, Textarea, Typography } from '.';

const defaultState: SiteForm = {
  name: '',
  address: '',
  description: '',
  latitude: '',
  longitude: '',
};

type SiteFormProps = {
  initialState?: SiteForm | undefined;
  isLoading?: boolean;
  isSuccess?: boolean;
  message?: string;
  handleFormSubmit: (values: SiteForm) => void;
};

export default function SiteForm({
  initialState = defaultState,
  handleFormSubmit,
  isLoading = false,
  isSuccess,
  message,
}: SiteFormProps) {
  const navigate = useNavigate();
  const { handleChange, values, errors, touched, handleSubmit } = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      name: Yup.string().required('Please enter site name'),
      address: Yup.string().required('Please enter site address'),
      description: Yup.string().required('Please enter site description'),
      latitude: Yup.number()
        .typeError('Please enter only number')
        .required('Please enter site latitude'),
      longitude: Yup.number()
        .typeError('Please enter only number')
        .required('Please enter site longitude'),
    }),
    onSubmit: data => {
      handleFormSubmit(data);
    },
  });

  const handleCancel = () => {
    navigate('/sites');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        isError={!!errors.name && !!touched.name}
        error={errors.name}
        label="Name"
        name="name"
        onChange={handleChange}
        value={values.name}
        mb={4}
      />
      <TextField
        isError={!!errors.address && !!touched.address}
        error={errors.address}
        label="Jurisdiction/City/Region"
        name="address"
        onChange={handleChange}
        value={values.address}
        mb={4}
      />
      <Textarea
        isError={!!errors.description && !!touched.description}
        error={errors.description}
        label="Site Description"
        name="description"
        onChange={handleChange}
        value={values.description}
        mb={4}
      />
      <Box display="flex">
        <TextField
          isError={!!errors.latitude && !!touched.latitude}
          error={errors.latitude}
          label="Latitude"
          name="latitude"
          onChange={handleChange}
          value={values.latitude}
          mb={4}
          pr={4}
        />
        <TextField
          isError={!!errors.longitude && !!touched.longitude}
          error={errors.longitude}
          label="Longitude"
          name="longitude"
          onChange={handleChange}
          value={values.longitude}
          mb={4}
        />
      </Box>

      {isSuccess && (
        <Typography color="primary" mb={2}>
          {message}
        </Typography>
      )}

      <Box display="flex">
        <Button type="submit" isLoading={isLoading} disabled={isLoading} mt={1}>
          save
        </Button>
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          mt={1}
          ml={1}
          variant="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Box>
    </form>
  );
}
