import TimelineIcon from "@mui/icons-material/Timeline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export type SidebarActionItem = {
  href: string;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {muiName: string}
}

export const actions: SidebarActionItem[] = [
  {
    href: '/total',
    title: 'Итоги',
    Icon: TimelineIcon
  },
  {
    href: 'orders',
    title: 'Заказы',
    Icon: DoneAllIcon
  },
  {
    href: 'messages',
    title: 'Сообщения',
    Icon: MailOutlineIcon
  },
  {
    href: '/',
    title: 'Звонки',
    Icon: CallOutlinedIcon
  },
  {
    href: '/counterparties',
    title: 'Контрагенты',
    Icon: PeopleAltOutlinedIcon

  },
  {
    href: '/documents',
    title: 'Документы',
    Icon: DescriptionOutlinedIcon
  },
  {
    href: '/executors',
    title: 'Исполнители',
    Icon: PersonOutlineOutlinedIcon
  },
  {
    href: '/reports',
    title: 'Отчеты',
    Icon: WorkOutlineOutlinedIcon

  },
  {
    href: '/info-base',
    title: 'База знаний',
    Icon: LocalLibraryOutlinedIcon
  },
  {
    href: '/settings',
    title: 'Настройки',
    Icon: SettingsOutlinedIcon
  }
];
