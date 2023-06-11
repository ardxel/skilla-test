import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {selectTimeline} from "./calls.ts";
import {getCallList} from "../api";

export const timelineListener = createListenerMiddleware()
timelineListener.startListening({
  matcher: isAnyOf(selectTimeline),
  effect: (_, {getState, dispatch}) => {
    const {date_start, date_end} = (getState() as RootState).calls.timeline;

    if (date_start && date_end) {
      dispatch(getCallList({
        date_end,
        date_start
      }))
    }
  }
})