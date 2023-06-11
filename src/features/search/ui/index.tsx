import {ChangeEvent, CSSProperties, FC, useState} from "react";
import {
  SearchButton,
  SearchCloseIcon,
  SearchInput,
  SearchOpenIcon,
  SearchPlaceholder,
  SearchWrapper
} from "./styles.tsx";

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