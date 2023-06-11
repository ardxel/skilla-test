import {Button, InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styled from '@emotion/styled';

export const SearchWrapper = styled('div')`
  position: relative;
`

export const SearchInput = styled(InputBase)`
  && {
    padding: 10px;
    height: 40px;
    border-radius: 48px;
    position: relative;
    left: 0;
    top: 0;
    column-gap: 5px;
    border: 1px solid ${ (props: App.Theme) => props.theme.color.blue500 };

    & .MuiInputBase-input {
      padding: 0 5px;
      font-family: "SF Pro Display", sans-serif;
      color: #122945;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }
  }

`

export const SearchButton = styled(Button)`
  padding: 2px;

  && {
    &:hover {
      background: transparent;

      svg, #search-placeholder {
        color: ${ (props: App.Theme) => props.theme.color.blue500 }
      }

    }
  }
`

export const SearchOpenIcon = styled(SearchIcon)`
  && {
    color: ${ (props: App.Theme) => props.theme.color.gray500 }
  }
`

export const SearchCloseIcon = styled(CloseIcon)`
  && {
    color: ${ (props: App.Theme) => props.theme.color.gray500 };
    cursor: pointer;

    &:hover {
      color: ${ (props: App.Theme) => props.theme.color.blue500 }
    }
  }
`

export const SearchPlaceholder = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #5E7793;
  text-transform: none;
  letter-spacing: inherit;
  font-family: "SF Pro Display", sans-serif;
  font-weight: 400;
  margin-left: 12px;
`