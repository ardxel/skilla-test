import {Button} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from '@emotion/styled';


export const ProfileDirectorButton = styled(Button)`
  height: 100%;
  margin-left: 47px;
  
  && {
    &:hover {
      background-color: transparent;
    }
  }
`

export const ProfileDirectorSelectIcon = styled(KeyboardArrowDownIcon)`
  color: ${(props: App.Theme) => props.theme.color.gray500};
  width: 24px;
  height: 24px;
`