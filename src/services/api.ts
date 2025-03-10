import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantType } from '../components/Listagem'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<RestaurantType, void>({
      query: () => 'restaurantes'
    }),
    getDishe: builder.query<RestaurantType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetDisheQuery } = api

export default api
