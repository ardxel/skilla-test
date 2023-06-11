import {SidebarAddOrderIcon, SidebarButton, SidebarPayIcon, SidebarWrapper, SkillaLogo} from "./styles.tsx";

import {actions} from "../model/action-storage.ts";
import {SidebarLinks} from "./links";

const Sidebar = () => {
  return (
    <SidebarWrapper>

      <SkillaLogo/>

      <SidebarLinks links={actions}/>

      <SidebarButton endIcon={<SidebarAddOrderIcon/>} style={{marginTop: '56px'}}>
        <span className='sidebar-button-title'>Добавить заказ</span>
      </SidebarButton>
      <SidebarButton endIcon={<SidebarPayIcon/>}>
        <span className='sidebar-button-title'>Оплата</span>
      </SidebarButton>
    </SidebarWrapper>
  )
}

export default Sidebar