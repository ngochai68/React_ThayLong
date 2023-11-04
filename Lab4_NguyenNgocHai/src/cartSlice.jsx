import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    listSP: [],
  },
  reducers: {
    themSP: (state, param) => {
      let sp = param.payload;
      let index = state.listSP.findIndex((s) => s._id === sp._id);
      if (index === -1) {
        sp.soluong = 1;
        state.listSP.push(sp);
        console.log('Đã thêm sp. Số SP=', state.listSP.length);
      } else {
        state.listSP[index].soluong++;
        console.log('Đã thêm sp. Số SP=', state.listSP.length);
      }
    },

    suaSL: (state, param) => {
      let _id = param.payload[0];
      let soluong = param.payload[1];
      let index = state.listSP.findIndex((s) => s._id === _id);
      if (index !== -1) {
        state.listSP[index].soluong = Number(soluong);
        console.log('Đã sửa sp', param);
      }
    },

    xoaSP: (state, param) => {
      let _id = param.payload;
      const index = state.listSP.findIndex((s) => s._id === _id);
      console.log(_id);
      console.log(index);
      if (index !== -1) {
        state.listSP.splice(index, 1);
      }
    },

    xoaHetSP: (state) => {
      state.listSP = [];
    },
  },
});

export const { themSP, suaSL, xoaSP, xoaHetSP } = cartSlice.actions;

export default cartSlice.reducer;
