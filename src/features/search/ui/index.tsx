import {ChangeEvent, CSSProperties, FC, useState} from "react";
import {Button, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled'

const SearchWrapper = styled('div')`
  position: relative;
`

const SearchInput = styled(InputBase)`
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

const SearchButton = styled(Button)`
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

const SearchOpenIcon = styled(SearchIcon)`
  && {
    color: ${ (props: App.Theme) => props.theme.color.gray500 }
  }
`

const SearchCloseIcon = styled(CloseIcon)`
  && {
    color: ${ (props: App.Theme) => props.theme.color.gray500 };
    cursor: pointer;

    &:hover {
      color: ${ (props: App.Theme) => props.theme.color.blue500 }
    }
  }
`

const SearchPlaceholder = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #5E7793;
  text-transform: none;
  letter-spacing: inherit;
  font-family: "SF Pro Display", sans-serif;
  font-weight: 400;
  margin-left: 12px;
`

interface SearchProps {
  placeholder?: string;
  handler?: (e: ChangeEvent<HTMLInputElement> | string) => void;
  value?: string;
  defaultValue?: string;
  style?: CSSProperties;
}

export const Search: FC<SearchProps> = (props) => {
  const {placeholder, handler, style, value, defaultValue} = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    if (handler) {
      handler('')
    }
  }

  return (
    <SearchWrapper style={style}>
      { open && <SearchInput
        placeholder={ placeholder }
        onChange={handler}
        defaultValue={defaultValue || ''}
        value={value}
        startAdornment={ <SearchOpenIcon/> }
        endAdornment={ <SearchCloseIcon onClick={ handleClose }/> }
      /> }
      { !open && <SearchButton disableRipple onClick={ handleOpen }>
        <SearchOpenIcon/>
        <SearchPlaceholder id='search-placeholder'>{ placeholder }</SearchPlaceholder>
      </SearchButton> }
    </SearchWrapper>
  )
}