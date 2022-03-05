import { useQuery } from 'react-query';

import { useAxios } from '../hooks';

export const useGetSites = () => {
  const axios = useAxios();

  return useQuery<Site[], Error>(
    'radios',
    async () => {
      const { data } = await axios.get(`/sites`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};
