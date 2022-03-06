import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, Button, TextField } from '.';

type State = Omit<
  Site,
  'siteId' | 'userId' | 'createdAt' | 'updatedAt' | 'userName'
>;

const defaultState: State = {
  name: '',
  address: '',
  description: '',
  latitude: '',
  longitude: '',
};

type SiteFormProps = {
  initialState: State | undefined;
  isLoading?: boolean;
  handleFormSubmit: (values: State) => void;
};

export default function SiteForm({
  initialState = defaultState,
  handleFormSubmit,
  isLoading = false,
}: SiteFormProps) {
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
      <TextField
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

      <Button type="submit" isLoading={isLoading} disabled={isLoading} mt={2}>
        submit
      </Button>
    </form>
  );
}
