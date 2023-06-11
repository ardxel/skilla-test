import styled from "@emotion/styled";
import {IconButton, Menu, MenuItem} from "@mui/material";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from '@mui/icons-material/Logout';

import {FC} from "react";
import {useSelector} from "react-redux";
import {ProfileDirectorWorkerList} from "../list";
import {AppTooltip} from "shared/ui";

const Container = styled(Menu)`
  && {
    & .MuiMenu-root.MuiPopover-paper.MuiMenu-paper {
      box-Shadow: 4px 16px 50px rgba(129, 135, 163, 0.24);
    }

    & .MuiList-root .MuiMenu-list {
      border: 1px solid #EAF0FA;
    }
    & .MuiButtonBase-root.MuiMenuItem-root {
      padding: 0;
    }
  }
`

const Item = styled(MenuItem)`
  display: flex;
  flex-direction: column;
  cursor: auto;
  width: 368px;

  &:hover {
    background: transparent;

  }
`

const LogoutButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;

  && {
    padding: 0;
  }

  &:hover {
    svg {
      color: ${(props: App.Theme) => props.theme.color.blue500};
      cursor: pointer;
    }
  }

  svg {
    color: #ADBDFD;
  }
`

const MenuTitle = styled('span')`
  && {
    //width: 100%;
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 12px 20px;
  }
`

const MenuTitleName = styled('span')`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #122945;
  font-family: "SF Pro Display", sans-serif;
`

const MenuTitleDesc = styled('span')`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 15px;
  color: #5E7793;
`

const MenuTitleInfo = styled('div')`
  margin-top: 8px;
`

const MenuTitleInfoItem = styled('div')`
  display: flex;
  align-items: center;

  & * {
    color: #5E7793;
    font-size: 15px;
    font-weight: 400;
  }

  & > span {
    margin-left: 12px;
  }
`

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