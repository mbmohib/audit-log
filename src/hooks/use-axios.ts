import axios, { Axios, AxiosError } from 'axios';
import { useMemo } from 'react';

import { apiEndpoint } from '../config';

export default function useAxios() {
  const axiosClient: Axios = useMemo(() => {
    const axiosInstance = axios.create({
      baseURL: apiEndpoint,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    axiosInstance.interceptors.response.use(
      undefined,
      (error: AxiosError): Promise<AxiosError> => {
        const statusCode = error.response ? error.response.status : null;

        if (statusCode === 500) {
          // handle error
        }

        return Promise.reject(error);
      },
    );

    return axiosInstance;
  }, []);

  return axiosClient;
}
