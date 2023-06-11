import {createAsyncThunk} from "@reduxjs/toolkit";
import {mockProfileInfo} from "../model";
// import {appInstance} from "../../../shared/api";

export const getProfile = createAsyncThunk(
  'getProfile',
  async () => {
    // const response = await appInstance.post('partnership');
    //
    // const data = response.data;
    //
    // console.log(data);

    return mockProfileInfo;
  }
)