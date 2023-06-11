import {FC, MouseEvent} from "react";
import {Avatar} from "shared/ui";
import {ProfileDirectorButton, ProfileDirectorSelectIcon} from "./styles.tsx";

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