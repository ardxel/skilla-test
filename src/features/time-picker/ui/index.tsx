import {useCallback, useMemo} from "react";
import {Dropdown, SelectItem} from "shared/ui";
import {DateRange, DateRangeValidationError,} from "@mui/x-date-pickers-pro";
import {useDispatch, useSelector} from "react-redux";
import {selectTimeline} from "entities/call-table";
import {FieldChangeHandlerContext} from "@mui/x-date-pickers/internals";
import {dateDiffInDays} from "../lib/dateDiffInDays.ts";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {getNoun} from "../lib/getNoun.ts";

import {TimePickerButton} from "./button.tsx";
import {Switcher, Wrapper} from './styles.tsx';
import {AppDateRangePicker} from "./picker.tsx";


const DATE_NOW = new Date();

export const TimePicker = () => {
  const {date_start, date_end, user_choose} = useSelector((state: RootState) => state.calls.timeline);

  const dispatch = useDispatch();

  const days_data = useMemo(() => {
    return {
      daysInWeek: 7,
      daysInMonth: new Date(DATE_NOW.getFullYear(), DATE_NOW.getMonth() + 1, 0).getDate(),
      daysInYear: 365
    }
  }, [])

  const getDayWord = (value: string) => {
    if (+value === days_data.daysInWeek) {
      return 'Неделя'
    }
    if (+value === days_data.daysInMonth) {
      return 'Месяц'
    }
    if (+value === days_data.daysInYear) {
      return 'Год'
    }

    return value;
  }

  // лексическое сослагание для слова день
  const getDayNoun = useCallback((val: number) =>
      getNoun.call(null, val, 'день', 'дня', 'дней'),
    [])
  // remove 1 day
  const decrease = useCallback(() => {
    const date = new Date(date_start);

    const new_date_start = new Date(+date + (24 * 60 * 60 * 1000));

    const new_date_end = new Date(date_end);

    const diff = dateDiffInDays(new_date_end, new_date_start);

    if (diff > 0) {
      dispatch(selectTimeline({
        dates: [new_date_start, new_date_end],
        choose: diff + ' ' + getDayNoun(diff)
      }))
    }
  }, [date_start,date_end])
  // add 1 day
  const increase = useCallback(() => {
    const date = new Date(date_start);

    const new_date_start = new Date(+date - (24 * 60 * 60 * 1000));

    const new_date_end = new Date(date_end);

    const diff = dateDiffInDays(new_date_end, new_date_start);

    dispatch(selectTimeline({
      dates: [new_date_start, new_date_end],
      choose: diff + ' ' + getNoun(diff, 'день', 'дня', 'дней')
    }))
  }, [date_start,date_end])

  const handleChangeTimelineByDatePicker = useCallback(
    (
      value: DateRange<Date>,
      context: FieldChangeHandlerContext<DateRangeValidationError>
    ) => {
      // if context is full of null so then is no errors
      if (context.validationError.every(value => value === null)) {
        dispatch(selectTimeline({dates: value, choose: 'Свое'}))
      }
    }, [date_start, date_end])

  const handleChangeTimelineBySelectItem = useCallback((value: string) => {
    const dates: DateRange<Date> = [
      new Date(new Date().setDate(DATE_NOW.getDate() - Number(value))),
      DATE_NOW
    ]
    const choose = getDayWord(value)

    dispatch(selectTimeline({dates, choose: choose ?? '3 Дня'}));

  }, [date_start, date_end])

  return (
    <Wrapper>
      <Switcher onClick={ decrease }>
        <KeyboardArrowLeftOutlinedIcon/>
      </Switcher>
      <Dropdown
        fixedTitle
        disableIcon
        title={ <TimePickerButton/> }
        currentValue={ user_choose }
        handler={ handleChangeTimelineBySelectItem }>
        <SelectItem value={user_choose} color='#002CFB'>
          {user_choose}
        </SelectItem>
        <SelectItem value={ days_data.daysInWeek }>
          Неделя
        </SelectItem>
        <SelectItem value={ days_data.daysInMonth }>
          Месяц
        </SelectItem>
        <SelectItem value={ days_data.daysInYear }>
          Год
        </SelectItem>
        <AppDateRangePicker handler={ handleChangeTimelineByDatePicker }/>
      </Dropdown>
      <Switcher onClick={ increase }>
        <KeyboardArrowRightOutlinedIcon/>
      </Switcher>
    </Wrapper>
  )
}