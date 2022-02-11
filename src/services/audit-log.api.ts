import { useQuery } from 'react-query';

import { useAxios } from '../hooks';

export const useGetRadios = () => {
  const axios = useAxios();

  return useQuery<AuditLog[], Error>(
    'radios',
    async () => {
      const { data } = await axios.get(`/audit-logs`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};
