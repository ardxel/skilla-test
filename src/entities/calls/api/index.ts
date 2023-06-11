import {appInstance} from "shared/api";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CallListRequest} from "../model";

export const getCallList = createAsyncThunk(
  'getCallList',
  async (body?: CallListRequest) => {
    console.log(body);
    const response = await appInstance.post('mango/getList', body ?? {
      date_start: "2023-05-20",
      date_end: '2023-06-07',
    });

    return await response.data.results;
  })