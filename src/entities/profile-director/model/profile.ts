import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProfile} from "../api";
import type {TProfile} from "./mock-profile-info.ts";


const test_img = 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-on-chest_176420-18743.jpg?w=2000';

const workers = [
  {
    img: test_img,
    name: "Мирон",
    surname: "Батонов"
  },
  {
    img: test_img,
    name: 'Милана',
    surname: 'Константинопольская'
  },
  {
    img: test_img,
    name: 'Алексей',
    surname: 'Ильин'
  }
]

const mockWorkers = [
  {
    title: 'Операторы',
    workers
  },
  {
    title: 'Логисты',
    workers
  },
  {
    title: 'Бухгалтеры',
    workers
  }
]

type ProfileState = {
  data: TProfile;
  balance: number;
  workers: typeof mockWorkers;
  isLoading: boolean;
}


const initialState: ProfileState = {
  data: {} as TProfile,
  balance: 272,
  isLoading: false,
  workers: mockWorkers
};

export const profile = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    changeBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProfile.fulfilled, (state,action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
  }
})

export const {changeBalance} = profile.actions;
export const profileReducer = profile.reducer;