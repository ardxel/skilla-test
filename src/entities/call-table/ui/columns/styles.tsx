import styled from '@emotion/styled';
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {FC} from "react";
import {Grade} from "shared/ui";
import {DataGrid} from "@mui/x-data-grid";
import {TableGradeProps} from "./index.tsx";

export const BlueArrowIcon = styled(CallReceivedIcon)`
  color: ${ (props: App.Theme) => props.theme.color.blue500 };
  font-size: 22px;
`

export const RedArrowIcon = styled(CallMadeIcon)`
  color: #EA1A4F;
  font-size: 22px;
`
export const RowGrade: FC<TableGradeProps> = ({grade_type}) => {
  if (grade_type === 1) {
    return (
      <TableGradeWrapper>
        <TableGradeCircle>
          <Grade.BadCircle/>
        </TableGradeCircle>
        <Grade.Bad>Плохо</Grade.Bad>
      </TableGradeWrapper>
    )
  }
  if (grade_type === 2) {
    return (
      <TableGradeWrapper>
        <TableGradeCircle>
          <Grade.GoodCircle/>
        </TableGradeCircle>
        <Grade.Good>Хорошо</Grade.Good>
      </TableGradeWrapper>
    )
  }
  if (grade_type === 3) {
    return (
      <TableGradeWrapper>
        <TableGradeCircle>
          <Grade.PerfectCircle/>
        </TableGradeCircle>
        <Grade.Perfect>Отлично</Grade.Perfect>
      </TableGradeWrapper>
    )
  }
  return null;
}

export const RowGradeShowRecord = styled.button`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  text-align: center;
  color: ${ (props: App.Theme) => props.theme.color.blue500 };
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${ (props: App.Theme) => props.theme.color.blue500 };
  padding: 10px;
  transition: all 0.3s linear;
  &:focus {
    background: ${(props: App.Theme) => props.theme.color.blue700};
    color: white;
  }
`

export const TableGradeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const TableGradeCircle = styled.div`
  width: 50px;
`

export const StyledDataGrid = styled(DataGrid)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 5px #E9EDF3;
  padding: 26px 40px;
  margin-top: 15px !important;
`

export const RowGradeNoScript = styled.span`
  color: ${ (props: App.Theme) => props.theme.color.red500 };
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
`