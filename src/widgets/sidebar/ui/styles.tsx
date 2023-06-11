import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

import {Button} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";

/* WRAPPER */
export const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  border: 1px solid black;
  width: 240px;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props: App.Theme) => props.theme.color.blue900};
  
  & > svg {
    position: absolute;
    left: 12px;
    top: 12px;
  }
`

/* BRAND LOGO */
export const SkillaLogo = () => (
  <svg width="109" height="28" viewBox="0 0 109 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M35.1947 7.47254V0L39.7212 3.72744L35.1947 7.47254ZM3.27196 26.3924C4.81469 27.4523 6.7304 27.9823 9.00212 27.9823C11.4603 27.9823 13.4777 27.3287 15.0374 26.0391C16.5802 24.7318 17.3431 22.9829 17.3431 20.7747C17.3431 20.1034 17.2583 19.4675 17.0888 18.8845C16.9192 18.3015 16.7327 17.8069 16.4954 17.4006C16.2581 16.9766 15.936 16.588 15.4952 16.1993C15.0544 15.8107 14.6645 15.5104 14.3254 15.2807C13.9863 15.0511 13.5117 14.8038 12.8844 14.5388C12.2571 14.2738 11.7655 14.0795 11.4095 13.9558C11.2719 13.9102 11.1137 13.8574 10.9338 13.7974L10.9321 13.7968C10.6245 13.6942 10.2539 13.5705 9.81587 13.4258C8.12055 12.8782 6.96774 12.3659 6.35743 11.9066C5.76407 11.4473 5.45891 10.8467 5.45891 10.087C5.45891 9.38042 5.71321 8.79745 6.25571 8.35582C6.79821 7.91418 7.54415 7.68452 8.47657 7.68452C10.477 7.68452 11.952 8.70913 12.8674 10.7583L16.6649 8.47948C15.8851 6.78358 14.7831 5.47633 13.376 4.52238C11.9689 3.58611 10.3414 3.10914 8.47657 3.10914C6.40829 3.10914 4.62821 3.7451 3.15328 5.03469C1.67836 6.32427 0.932423 8.0555 0.932423 10.2107C0.932423 11.306 1.11891 12.2599 1.47492 13.0902C1.84789 13.9028 2.39039 14.5918 3.10242 15.1217C3.81446 15.6694 4.52649 16.0933 5.23852 16.4113C5.95055 16.7293 6.81516 17.0473 7.8493 17.3653C9.6972 17.9129 10.9856 18.4252 11.7146 18.8845C12.4436 19.3438 12.7996 19.9974 12.7996 20.8454C12.7996 21.5697 12.5114 22.1703 11.9181 22.6473C11.3417 23.1242 10.4092 23.3716 9.13774 23.3716C6.52696 23.3716 4.76383 22.1526 3.86532 19.7148L0 22.0643C0.627266 23.9015 1.71227 25.3324 3.27196 26.3924ZM42.1794 27.4524V8.74452L46.672 6.78364V27.4524H42.1794ZM35.1947 27.4524V11.8007L39.6873 9.83978V27.4524H35.1947ZM49.1471 27.4524V5.70603L53.6397 3.74515V27.4524H49.1471ZM67.5085 11.8008H72.001V27.4526H67.5085V25.7037C66.3387 27.2406 64.6942 28.0002 62.5751 28.0002C60.5577 28.0002 58.8284 27.2052 57.3874 25.5977C55.9464 23.9901 55.2344 22.0292 55.2344 19.6974C55.2344 17.3655 55.9464 15.4046 57.3874 13.7971C58.8284 12.1895 60.5577 11.3945 62.5751 11.3945C64.6942 11.3945 66.3387 12.1542 67.5085 13.6911V11.8008ZM60.812 22.6652C61.5409 23.4425 62.4734 23.8311 63.5923 23.8311C64.7112 23.8311 65.6606 23.4425 66.3895 22.6652C67.1355 21.8879 67.5085 20.8986 67.5085 19.6797C67.5085 18.4608 67.1355 17.4715 66.3895 16.6942C65.6436 15.9169 64.7112 15.5283 63.5923 15.5283C62.4734 15.5283 61.5409 15.9169 60.812 16.6942C60.083 17.4715 59.71 18.4608 59.71 19.6797C59.71 20.8986 60.083 21.8879 60.812 22.6652ZM27.2437 19.3615L33.1434 11.8183H27.3454L23.3953 16.8177V3.74515L18.9028 5.58238V27.4524H23.3953V21.8524L27.7862 27.4524H33.6011L27.2437 19.3615ZM100.002 27.9823C97.7304 27.9823 95.8147 27.4523 94.272 26.3924C92.7123 25.3324 91.6273 23.9015 91 22.0643L94.8653 19.7148C95.7638 22.1526 97.527 23.3716 100.138 23.3716C101.409 23.3716 102.342 23.1242 102.918 22.6473C103.511 22.1703 103.8 21.5697 103.8 20.8454C103.8 19.9974 103.444 19.3438 102.715 18.8845C101.986 18.4252 100.697 17.9129 98.8493 17.3653C97.8152 17.0473 96.9506 16.7293 96.2385 16.4113C95.5265 16.0933 94.8145 15.6694 94.1024 15.1217C93.3904 14.5918 92.8479 13.9028 92.4749 13.0902C92.1189 12.2599 91.9324 11.306 91.9324 10.2107C91.9324 8.0555 92.6784 6.32427 94.1533 5.03469C95.6282 3.7451 97.4083 3.10914 99.4766 3.10914C101.341 3.10914 102.969 3.58611 104.376 4.52239C105.783 5.47633 106.885 6.78358 107.665 8.47948L103.867 10.7583C102.952 8.70913 101.477 7.68452 99.4766 7.68452C98.5441 7.68452 97.7982 7.91418 97.2557 8.35582C96.7132 8.79746 96.4589 9.38042 96.4589 10.087C96.4589 10.8467 96.7641 11.4473 97.3574 11.9066C97.9677 12.3659 99.1206 12.8782 100.816 13.4258C101.254 13.5705 101.624 13.6942 101.932 13.7968L101.932 13.7969C102.113 13.8571 102.272 13.9101 102.409 13.9558C102.765 14.0795 103.257 14.2738 103.884 14.5388C104.512 14.8038 104.986 15.0511 105.325 15.2807C105.664 15.5104 106.054 15.8107 106.495 16.1993C106.936 16.588 107.258 16.9766 107.495 17.4006C107.733 17.8069 107.919 18.3015 108.089 18.8845C108.258 19.4675 108.343 20.1034 108.343 20.7747C108.343 22.9829 107.58 24.7318 106.037 26.0391C104.478 27.3287 102.46 27.9823 100.002 27.9823ZM84 5.706V27.4523H88.4926V3.74512L84 5.706Z"
          fill="#FFD500"/>
  </svg>
)

/* LINKS CONTAINER */
export const SidebarLinks = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  width: 100%;
`

/* LINK */
export const SidebarLink = styled(NavLink)`
  &:link {
    text-decoration: none;
  }
  transition: background-color 0.3s ease-in-out;
  position: relative;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 15px 0;
  cursor: pointer;
  color: ${(props: App.Theme) => props.theme.color.white60};

  svg {
    margin-left: 12px;
  }

  span {
    margin-left: 12px;
  }

  // if page is current then use this styles
  &[aria-current='page'] {
    background: ${(props: App.Theme) => props.theme.color.white32};
    &::before {
      content: '';
      height: 100%;
      width: 3px;
      position: absolute;
      left: 0;
      top: 0;
      background: ${(props: App.Theme) => props.theme.color.blue500};
    }

    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: ${(props: App.Theme) => props.theme.color.orange700};
      border-radius: 50%;
      position: absolute;
      right: 12px;
      box-shadow: 0 3px 8px 0 rgba(237, 218, 1, 0.5);
    }
    span, svg {
      color: white;
    }
  }
`

/* BUTTON */
export const SidebarButton = styled(Button)`
  && {
    &:not(:first-of-type) {
      margin-top: 45px;
    }
    &:hover {
      background: ${(props: App.Theme) => props.theme.color.blue700};
    }
    &:active {
      background: ${(props: App.Theme) => props.theme.color.blue600};
    }
    background: ${(props: App.Theme) => props.theme.color.blue400};
    font-family: "SF Pro Display", sans-serif;
    color: white;
    margin: 0 auto;
    padding: 18px 0;
    border-radius: 4px;
    width: calc(240px - 40px);
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    align-items: normal;
  }
  span.sidebar-button-title {
    width: 100%;
    margin-right: 34px;
    text-align: center;
  }
`

/* ICONS */
export const SidebarAddOrderIcon = styled(AddIcon)`
  && {
    font-size: 24px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    padding: 2px;

    &:hover {
      color: ${(props: App.Theme) => props.theme.color.blue700};
    }

    &:active {
      color: ${(props: App.Theme) => props.theme.color.blue600};
    }

    color: ${(props: App.Theme) => props.theme.color.blue400};
    background: rgba(216, 228, 251, 0.56);
    border-radius: 50%;
  }
`

export const SidebarPayIcon = styled(PriorityHighOutlinedIcon)`
  && {
    font-size: 24px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    padding: 2px;
    &:hover {
      color: ${(props: App.Theme) => props.theme.color.blue700};
    }
    &:active {
      color: ${(props: App.Theme) => props.theme.color.blue600};
    }
    color: ${(props: App.Theme) => props.theme.color.blue400};    background: rgba(216,228,251,0.56);
    border-radius: 50%;
  }
`