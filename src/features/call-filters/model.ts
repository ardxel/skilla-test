import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {FilterKey, setFilterValue} from "entities/calls";

type FilterValue = string;
type FilterHandler = (selected: FilterValue) => void;
type InitialFilterValue = string;

type FilterDispatch = [FilterValue, FilterHandler, InitialFilterValue]

export const useCallFilter = <K extends FilterKey>(key: K): FilterDispatch => {
  const {default: defaultValue, value} = useSelector((state: RootState) => state.calls.filter[key]);
  const dispatch: AppDispatch = useDispatch();
  const handler = useCallback((selected: string) => {
    dispatch(setFilterValue({
      filterType: key,
      value: selected
    }))
  }, [value]);

  return [value, handler, defaultValue];
}