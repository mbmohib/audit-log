import { useMutation, useQuery, useQueryClient } from 'react-query';

import { useAxios } from '../hooks';

export const useGetSite = (id: string | undefined) => {
  const axios = useAxios();

  return useQuery<Site, Error>(
    ['sites', id],
    async () => {
      const { data } = await axios.get(`/sites/${id}`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};

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

export const useCreateSite = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  return useMutation(
    ({
      data,
    }: {
      data: Omit<
        Site,
        'siteId' | 'userId' | 'createdAt' | 'updatedAt' | 'userName'
      >;
    }) => axios.post(`/sites`, data),
    {
      onSuccess: data => {
        queryClient.setQueryData('sites', sites => [
          ...(sites as Site[]),
          data.data,
        ]);
      },
      onError: () => {
        //
      },
    },
  );
};

export const useUpdateSites = () => {
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
