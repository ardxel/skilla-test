import {Button} from "@mui/material";
import styled from '@emotion/styled';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import {useSelector} from "react-redux";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Calendar = styled(Button)`
  && {
    padding: 0 11px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: ${ (props: App.Theme) => props.theme.color.blue400 };
    font-family: "SF Pro Display", sans-serif;
    position: relative;
    left: 8px;
    svg {
      transition: color 0.2s linear;
      color: ${ (props: App.Theme) => props.theme.color.gray500 };
    }

    &:hover {
      background-color: transparent;

      svg {
        color: ${ (props: App.Theme) => props.theme.color.blue500 }
      }
    }
  }
`

export const TimePickerButton = () => {
  const choose = useSelector((state: RootState) => state.calls.timeline.user_choose);
  return (
    <Wrapper>
      <Calendar startIcon={ <CalendarTodayOutlinedIcon/> }>{choose}</Calendar>
    </Wrapper>
  )
}