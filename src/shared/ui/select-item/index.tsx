import {MenuItem, MenuItemProps} from "@mui/material";
import styled from '@emotion/styled';
import {FC} from "react";


const Item = styled(MenuItem)<{color: string}>`

  && {
    min-height: 40px;
    font-size: 15px;
    line-height: 28px;
    font-weight: normal;
    font-family: "SF Pro Display", sans-serif;
    //color: #899CB1;
    color: ${({color}: {color: string}) => color ?? '#899CB1'};
    &:hover {
      background-color: rgba(0, 44, 251, 0.13);
      color: ${ (props: App.Theme) => props.theme.color.blue500 };
    }

    &[aria-selected="true"] {
      background-color: inherit;
    }

    &[aria-selected="true"]:hover {
      background-color: rgba(0, 44, 251, 0.13);
      color: ${ (props: App.Theme) => props.theme.color.blue500 };
    }
  }
`

type SelectItemProps = MenuItemProps & {
  value: string | number;
  color?: string
}

export const SelectItem: FC<SelectItemProps> = (props) => {
  return (
    <Item {...props}>
      {props.children}
    </Item>
  )
}