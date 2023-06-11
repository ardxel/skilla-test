import {MouseEvent, useCallback, useEffect, useState} from "react";
import {getCallList} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {getColumns} from "./columns";
import {StyledDataGrid} from "./columns/styles.tsx";

export const CallList = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const {calls, isLoading} = useSelector((state: RootState) => state.calls);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCallList());
  }, [])

  // TODO FIX
  // wrapping columns in a function for passing internal props
  const getCustomColumns = useCallback(() => {
    // function will return custom columns
    return getColumns(hoveredRow as number)
  }, [calls, hoveredRow])

  // set hovered row id for ui manipulation
  const handleMouseEnter = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.dataset.id;
    if (id) {
      setHoveredRow(Number(id));
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredRow(null);
  }, [])


  if (isLoading) {
    return <p>loading</p>
  }

  return (

    <StyledDataGrid
      columns={ getCustomColumns() }
      rows={ calls }
      rowHeight={ 65 }
      checkboxSelection
      hideFooter
      componentsProps={ {
        row: {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }
      } }
      sx={ {
        "& .MuiDataGrid-columnHeaders": {
          color: '#899CB1',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '14px',
        },
        // disable cell selection style
        '.MuiDataGrid-cell:focus': {
          outline: 'none'
        },
        // pointer cursor on ALL rows
        '& .MuiDataGrid-row:hover': {
          cursor: 'pointer',
        },
        '&.MuiButtonBase-root.MuiCheckbox-root': {
          display: 'none'
        }
      } }
    />
  )
}