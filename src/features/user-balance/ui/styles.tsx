import styled from '@emotion/styled';
import {IconButton, InputBase} from "@mui/material";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

export const Container = styled.div`
  background: white;
  border-radius: 48px;
  padding: 10px 12px;

  && {
    &:hover {
      background: white;

      svg, b {
        color: ${ (props: App.Theme) => props.theme.color.blue700 };
      }
    }
  }
`

export const Count = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: ${ (props: App.Theme) => props.theme.color.gray600 };

  b {
    margin-left: 4px;
    color: #122945;
    font-weight: 500;
  }
`

export const IncrementButton = styled(IconButton)`
  margin-left: 10px;
  padding: 0;
  color: ${ (props: App.Theme) => props.theme.color.blue400 };

`

type ColorProps = {
  error: boolean
}

export const Rubble = styled(CurrencyRubleIcon)`
  color: ${ ({error}: ColorProps) => error ? '#EA1A4F' : '#121212' };
  font-size: 20px;
`

export const BalanceMenuInput = styled(InputBase)`
  width: 150px;
  height: 50px;
  font-size: 16px;
  padding: 16px 13px;
  line-height: 21px;
  font-weight: 400;
  font-family: "SF Pro Display", sans-serif;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${ ({error}: ColorProps) => error ? '#EA1A4F' : 'rgba(173, 191, 223, 0.4)' } !important;
  display: flex;
  background-color: white;

  &:hover {
    border-color: rgba(0, 44, 251, 0.32);
  }

  &:focus {
    border-color: rgba(0, 44, 251, 0.8);

    input {
      border-color: rgba(0, 44, 251, 0.8);

    }
  }
`