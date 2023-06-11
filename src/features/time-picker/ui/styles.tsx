import styled from '@emotion/styled';
import {IconButton} from "@mui/material";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`

export const Title = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: #122945;
  padding: 6px 16px 0 16px;
`

export const Switcher = styled(IconButton)`
  && {
    padding: 0;

    svg {
      color: ${ (props: App.Theme) => props.theme.color.gray500 };
      font-size: 20px;
    }

    &:hover {
      svg {
        color: ${ (props: App.Theme) => props.theme.color.blue500 }
      }
    }
  }
`