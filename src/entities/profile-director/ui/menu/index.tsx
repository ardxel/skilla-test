import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from '@mui/icons-material/Logout';

import {FC} from "react";
import {useSelector} from "react-redux";
import {ProfileDirectorWorkerList} from "../list";
import {AppTooltip} from "shared/ui";
import {
  Container,
  Item,
  LogoutButton,
  MenuTitle,
  MenuTitleDesc,
  MenuTitleInfo,
  MenuTitleInfoItem,
  MenuTitleName
} from "./styles.tsx";

export type Worker = {
  img: string;
  name: string;
  surname: string;
}

type Props = {
  anchor: HTMLElement | null;
  handleClose: () => void;
  open: boolean;
}

export const ProfileDirectorMenu: FC<Props> = ({anchor, handleClose, open}) => {
  const {data,workers} = useSelector((state: RootState) => state.profile);

  // if object is empty then return loading... :)
  if (!Object.keys(data).length) {
    return <div>Loading...</div>
  }

  return (
    <Container open={open} anchorEl={anchor} onClose={handleClose}>
      <Item disableRipple disableFocusRipple>

        <MenuTitle disableRipple disableFocusRipple>

          <AppTooltip title='Выйти'>
            <LogoutButton disableRipple disableFocusRipple>
              <LogoutIcon/>
            </LogoutButton>
          </AppTooltip>

          <MenuTitleName>{data?.name} {data?.surname}</MenuTitleName>
          <MenuTitleDesc>{data?.position} {data?.partnership?.city}</MenuTitleDesc>

          <MenuTitleInfo>

            <MenuTitleInfoItem>
              <CallOutlinedIcon/>
              <span>8(800)333-17-21</span>
            </MenuTitleInfoItem>

            <MenuTitleInfoItem>
              <MailOutlineIcon/>
              <span>{data?.partnership.email}</span>
            </MenuTitleInfoItem>

          </MenuTitleInfo>
        </MenuTitle>
        {/* bottom line */}
        <div style={{
          width: '88%',
          height: '1px',
          margin: '16px 0',
          background: '#EAF0FA'
        }}></div>
        {workers.map(list => {
          return (
            <ProfileDirectorWorkerList key={list.title} personal={list.workers} title={list.title}/>
          )
        })}
      </Item>

    </Container>
  )
}