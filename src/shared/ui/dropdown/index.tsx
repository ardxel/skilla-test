import {SelectChangeEvent} from "@mui/material";
import {FC, ReactNode, useCallback, useMemo, useState} from "react";
import {DropdownIcon, DropdownSelect, DropdownStylesProps} from "./styles.tsx";

interface DropdownProps extends DropdownStylesProps {
  initialValue?: string;
  children: ReactNode[] | ReactNode;
  color?: string;
  title?: string | JSX.Element;
  fixedTitle?: boolean;
  currentValue: string;
  disableIcon?: boolean
  handler?: (selected: string) => void
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const {children, width, color, title, handler, currentValue, fixedTitle, disableIcon} = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: SelectChangeEvent<string>) => {
    if (handler) {
      handler(e.target.value)
    }
  }

  const iconComponent = useCallback(() =>
      disableIcon ? null : <DropdownIcon color={ color } focus={ open }/>,
    [disableIcon]);

  const renderValue = useCallback((selected: string) => {

    if (!title) {
      return selected;
    }

    let value;
    if (typeof title === "string") {
      value = <span>{ title }</span>;
    }
    // if title is JSX then return as fn
    if (typeof title === 'object') {
      value = title;
    }

    if (fixedTitle) {
      return value;
    } else {
      return open ? value : selected;
    }
  }, [currentValue])

  const dropdownProps = useMemo(() => {
    return {
      MenuListProps: {
        disablePadding: true
      },
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'right',
        horizontal: 'right'
      }
    }
  }, [])

  return (
    <>
      <DropdownSelect open={ open }
                      onOpen={ handleOpen }
                      value={ currentValue }
                      renderValue={ renderValue }
                      width={ width }
                      onClose={ handleClose }
                      onChange={ handleChange }
                      IconComponent={ iconComponent }
                      MenuProps={ dropdownProps }
                      sx={ {color} }>
        { children }
      </DropdownSelect>
    </>
  )
}