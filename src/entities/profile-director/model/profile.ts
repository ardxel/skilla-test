import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProfile} from "../api";
import type {TProfile} from "./mock-profile-info.ts";
import {TEST_IMAGE} from "shared/config";

const workers = [
  {
    img: TEST_IMAGE,
    name: "Мирон",
    surname: "Батонов"
  },
  {
    img: TEST_IMAGE,
    name: 'Милана',
    surname: 'Константинопольская'
  },
  {
    img: TEST_IMAGE,
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