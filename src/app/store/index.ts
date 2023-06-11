import {configureStore} from "@reduxjs/toolkit";
import {callsReducer} from "entities/calls/model";
import {profileReducer} from "entities/profile-director/model";
import {timelineListener} from "../../entities/calls/model/mw.ts";

export const store = configureStore({
  reducer: {
    calls: callsReducer,
    profile: profileReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(timelineListener.middleware)
})

