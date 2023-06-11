import styled from '@emotion/styled'
import {Select} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const defaultSelectStyles = {
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: '400',
  color: "#5E7793",
  opacity: '0.87'
}

export type DropdownStylesProps = {
  width?: number
}

export const DropdownSelect = styled(Select)<DropdownStylesProps>`
  ${ defaultSelectStyles };
  font-family: "SF Pro Display", sans-serif;
  text-transform: capitalize;
  cursor: pointer;
  width: ${ ({width}: DropdownStylesProps) => width
  ? `${ width }px` : 'auto' };
  min-width: 100px;

  &:hover {
    color: ${ (props: App.Theme) => props.theme.color.blue500 };

    svg {
      color: ${ (props: App.Theme) => props.theme.color.blue500 };
    }
  }

  && {
    & .MuiSelect-select.MuiSelect-outlined {
      margin-right: 10px;
      padding: 0;
      text-align: right;
    }

    fieldset {
      border: none;
    }
  }
`

type DropdownIconStyles = {
  focus?: boolean;
  color?: string;
}

export const DropdownIcon = styled(KeyboardArrowDownIcon)`
  && {
    color: ${ ({focus, color}: DropdownIconStyles) => focus
  ? '#002CFB'
  : (color ?? 'inherit') };
    transform: ${ ({focus}: DropdownIconStyles) => focus ? 'rotate(180deg)' : 'none' };
  }
`