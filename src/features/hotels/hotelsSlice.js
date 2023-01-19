import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Hotel 1",
    location: "Bangalore",
    star: 3,
    review: 4,
    price: 1000,
  },
  {
    id: 2,
    title: "Hotel 2",
    location: "Bangalore",
    star: 3,
    review: 3,
    price: 2000,
  },
  {
    id: 3,
    title: "Hotel 3",
    location: "Bangalore",
    star: 4,
    review: 5,
    price: 3000,
  },
  {
    id: 4,
    title: "Hotel 4",
    location: "Bangalore",
    star: 5,
    review: 5,
    price: 4000,
  },
];

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
});

export const selectAllHotels = (state) => state.hotels;

export default hotelsSlice.reducer;
