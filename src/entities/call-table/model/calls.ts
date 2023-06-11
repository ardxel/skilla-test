import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DateRange} from "@mui/x-date-pickers-pro";

import {getCallList} from "../api";
import {Call, CallWithResult} from "./types.ts";
import {randomNumber} from "../lib";

const defaultFilterStateProps = {
  type: {default: 'Все типы', value: 'Все типы'},
  worker: {default: 'Все сотрудники', value: 'Все сотрудники'},
  call: {default: 'Все звонки', value: 'Все звонки'},
  error: {default: 'Все ошибки', value: 'Все ошибки'},
  source: {default: 'Все источники', value: 'Все источники'},
  grade: {default: 'Все оценки', value: 'Все источники'},
}

const initialState = {
  // TODO
  calls: [] as CallWithResult[],
  isLoading: false,
  idle: false,
  filter: defaultFilterStateProps,
  filterHasNotDefaultValue: false,
  organization: 'Все сотрудники',
  searchPhoneNumber: {
    value: '',
    result: null
  },
  timeline: {
    /* Date format is YYYY-MM-DD */
    date_start: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().substring(0, 10),
    date_end: new Date().toISOString().substring(0, 10),
    user_choose: '3 дня'
  }
}

type CallModelState = typeof initialState;
type Filter = { default: string, value: string };
export type FilterKey = keyof typeof initialState.filter;
export type FilterByPayloadAction = PayloadAction<{ filterType: FilterKey, value: string }>;

type SearchByPhoneNumber = PayloadAction<{ value: string }>

type SelectOrganization = PayloadAction<string>;

export type SelectTimeline = PayloadAction<{
  dates: DateRange<Date>;
  choose: string;
}>;

export const callsModel = createSlice({
  name: 'callsModel',
  initialState: initialState as CallModelState,
  reducers: {

    setFilterValue: (state, action: FilterByPayloadAction) => {
      console.log('filterBy: ', action.payload);
      const {filterType, value} = action.payload;
      // if state.filter has filterType key then change the value
      if (Object.prototype.hasOwnProperty.call(state.filter, filterType)) {
        state.filter[filterType]['value'] = value
      }

      // if state filters has no default value then change
      // the prop "filterHasNoDefaultValue" for displaying UI component
      const hasChanges = Object.values
        .call(null, state.filter).find((filter: Filter) => {
          return filter['value'] !== filter.default
        })

      state.filterHasNotDefaultValue = Boolean(hasChanges);

    },

    clearFilters: (state) => {
      console.log('clearFilters')
      for (const key in state.filter) {
        state.filter[key as FilterKey].value = state.filter[key as FilterKey].default;
      }
      state.filterHasNotDefaultValue = false;
    },

    searchByPhoneNumber: (state, action: SearchByPhoneNumber) => {
      console.log('searchByPhoneNumber: ', action.payload)

      const {value} = action.payload;

      state.searchPhoneNumber.value = value;
      // TODO
      state.searchPhoneNumber.result = null;
    },

    selectOrganization: (state, action: SelectOrganization) => {
      state.organization = action.payload;
    },

    selectTimeline: (state, action: SelectTimeline) => {
      console.log('select timeline action: ', action.payload);
      // if date range is validate then change the state
      if (action.payload.dates.every(date => Boolean(date))) {
        const [start, end] = action.payload.dates.map(date => date?.toISOString().substring(0, 10));

        state.timeline.date_start = start as string;
        state.timeline.date_end = end as string;
        state.timeline.user_choose = action.payload.choose;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(getCallList.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getCallList.fulfilled, (state, action: PayloadAction<Call[]>) => {
      state.isLoading = false;
      state.idle = false;
      // state.call-table = action.payload;

      // add fake_call_result key for testing app
      state.calls = action.payload.map((call) => {
        const hasCallResult = !call.errors.length && call.record;
        return {
          ...call,
          fake_call_result: hasCallResult ? randomNumber(1, 3) : 0,
        }
      });

    })
  }
})

export const callsReducer = callsModel.reducer;

export const {
  setFilterValue,
  clearFilters,
  searchByPhoneNumber,
  selectOrganization,
  selectTimeline
} = callsModel.actions;
