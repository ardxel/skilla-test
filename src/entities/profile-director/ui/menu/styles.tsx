import styled from '@emotion/styled';
import {IconButton, Menu, MenuItem} from "@mui/material";

export const Container = styled(Menu)`
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

export const Item = styled(MenuItem)`
  display: flex;
  flex-direction: column;
  cursor: auto;
  width: 368px;

  &:hover {
    background: transparent;

  }
`

export const LogoutButton = styled(IconButton)`
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

export const MenuTitle = styled('span')`
  && {
    //width: 100%;
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 12px 20px;
  }
`

export const MenuTitleName = styled('span')`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #122945;
  font-family: "SF Pro Display", sans-serif;
`

export const MenuTitleDesc = styled('span')`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 15px;
  color: #5E7793;
`

export const MenuTitleInfo = styled('div')`
  margin-top: 8px;
`

export const MenuTitleInfoItem = styled('div')`
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