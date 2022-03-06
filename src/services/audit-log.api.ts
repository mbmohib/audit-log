import { useQuery } from 'react-query';

import { useAxios } from '../hooks';

export const useGetAuditLogs = () => {
  const axios = useAxios();

  return useQuery<AuditLog[], Error>(
    'audit-logs',
    async () => {
      const { data } = await axios.get(`/audit-logs`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};

export const useGetAuditLog = (id: string | undefined) => {
  const axios = useAxios();

  return useQuery<AuditLog, Error>(
    ['audit-logs', id],
    async () => {
      const { data } = await axios.get(`/audit-logs/${id}`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};
