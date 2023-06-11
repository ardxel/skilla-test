import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {FC, MouseEvent} from "react";
import {Avatar} from "shared/ui";

const ProfileDirectorButton = styled(Button)`
  height: 100%;
  margin-left: 47px;
  
  && {
    &:hover {
      background-color: transparent;
    }
  }
`

const ProfileDirectorSelectIcon = styled(KeyboardArrowDownIcon)`
  color: ${(props: App.Theme) => props.theme.color.gray500};
  width: 24px;
  height: 24px;
`

type Props = {
  img: string,
  handleOpen: (e: MouseEvent<HTMLElement>) => void
}

export const ProfileDirectorTab: FC<Props> = ({img, handleOpen}) => {
  return (
    <ProfileDirectorButton endIcon={<ProfileDirectorSelectIcon/>} disableRipple onClick={handleOpen}>
      <Avatar src={img}/>
    </ProfileDirectorButton>
  )
}