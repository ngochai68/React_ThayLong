// src/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getLoai: builder.query({
      query: () => 'loai',
    }),
    getSanPhamXemNhieu: builder.query({
      query: (sotin) => `sanpham/xemnhieu/${sotin}`,
    }),
    getSanPhamById: builder.query({
      query: (id) => `sanpham/${id}`,
    }),
    getSanPhamCungLoai: builder.query({
      query: (idLoai) => `sanpham/cungloai/${idLoai}`,
    }),
    getSanPhamMoi: builder.query({
      query: (sotin) => `sanpham/moi/${sotin}`,
    }),
    getLoaiById: builder.query({
      query: (id) => `loai/${id}`,
    }),
    taoDonHang: builder.mutation({
      query: (donHang) => ({
        url: 'donhang/taodonhang',
        method: 'POST',
        body: donHang,
      }),
    }),
    taoChiTietDonHang: builder.mutation({
      query: (chiTietDonHang) => ({
        url: 'chitietdonhang/taochitietdonhang',
        method: 'POST',
        body: chiTietDonHang,
      }),
    }),
  }),
});

export const {
  useGetLoaiQuery,
  useGetSanPhamXemNhieuQuery,
  useGetSanPhamByIdQuery,
  useGetSanPhamCungLoaiQuery,
  useGetSanPhamMoiQuery,
  useGetLoaiByIdQuery,
  useTaoDonHangMutation,
  useTaoChiTietDonHangMutation,
} = apiSlice;
