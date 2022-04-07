import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@app/constants/config';

// initialize an empty api service that we'll inject endpoints into later as needed
const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

export default baseApi;
