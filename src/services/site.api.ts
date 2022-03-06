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
    'sites',
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
    ({ data }: { data: SiteForm }) => axios.post(`/sites`, data),
    {
      onSuccess: data => {
        const isExist = queryClient.getQueryData('sites');

        if (isExist) {
          queryClient.setQueryData('sites', oldData => [
            ...(oldData as Site[]),
            data.data,
          ]);
        }
      },
      onError: () => {
        //
      },
    },
  );
};

export const useUpdateSite = (id: string | undefined) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  return useMutation(
    ({ data }: { data: SiteForm }) => axios.put(`/sites/${id}`, data),
    {
      onSuccess: data => {
        queryClient.setQueryData(['sites', id], () => data.data);
        const isExist = queryClient.getQueryData('sites');

        if (isExist) {
          queryClient.setQueryData('sites', oldData => {
            let updatedData = [];
            if (Array.isArray(oldData)) {
              updatedData = oldData.map(item => {
                if (item.siteId === data.data.siteId) {
                  return data.data;
                }

                return {
                  ...item,
                };
              });
            }
            return updatedData;
          });
        }
      },
      onError: () => {
        //
      },
    },
  );
};
