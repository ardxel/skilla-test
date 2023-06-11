import {FC} from "react";
import {
  CalendarIcon,
  DateRange,
  DateRangePicker,
  DateRangeValidationError,
  SingleInputDateRangeField
} from "@mui/x-date-pickers-pro";
import {FieldChangeHandlerContext} from "@mui/x-date-pickers/internals";
import {Title} from "./styles.tsx";
import styled from '@emotion/styled';

type AppDateRangePickerProps = {
  handler:
    (
      value: DateRange<Date>,
      context: FieldChangeHandlerContext<DateRangeValidationError>
    ) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const AppDateRangePicker: FC<AppDateRangePickerProps> = ({handler}) => {

  return (
    <Container>
      <Title>Указать даты</Title>
      <DateRangePicker
        format={ 'DD-MM-YY' }
        onChange={ handler }
        slots={ {
          field: SingleInputDateRangeField,
        } }
        slotProps={ {
          textField: {
            sx: {
              // fieldset styles
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none'
                }
              },
              // input styles
              input: {
                color: '#122945',
                paddingTop: '10px',
                fontSize: '14px',
                fontWeight: '400',
                width: '175px'
              }
            },
            placeholder: '__.__.__-__.__.__',
            InputProps: {
              endAdornment: <CalendarIcon sx={ {
                color: "#899CB1",
                marginBottom: '6px'
              } }/>
            }
          }
        } }
      />
    </Container>
  )
}