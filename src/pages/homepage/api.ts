import BaseApi from '@app/api-client';

const employeeApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query({
      query: (id: string) => `/mockURL/${id}`,
    }),
    addData: builder.mutation({
      query: (body: any) => ({
        url: '/mockURL',
        method: 'POST',
        body,
      }),
    }),
    updateData: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/mockURL/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteData: builder.mutation({
      query: ({ id }) => ({
        url: `/mockURL/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useAddDataMutation,
  useDeleteDataMutation,
  useUpdateDataMutation,
} = employeeApi;
