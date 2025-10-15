import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RstaurantesModal } from "../components/CardList";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ebac.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RstaurantesModal[], void>({
      query: () => "/restaurantes",
    }),
    getRestauranteById: builder.query<RstaurantesModal, string>({
      query: (id) => `/restaurantes/${id}`,
    }),
  }),
});

export const { useGetRestaurantesQuery, useGetRestauranteByIdQuery } = api;
export default api;
