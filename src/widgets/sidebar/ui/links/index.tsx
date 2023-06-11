import {FC} from "react";

import {SidebarActionItem} from "../../model/action-storage.ts";
import {SidebarLink as Link, SidebarLinks as Links} from "../styles.tsx";

export type SidebarLinkProps = {
  links: SidebarActionItem[]
}

export const SidebarLinks: FC<SidebarLinkProps> = ({links}) => {
  return (
    <Links>
      {links.map(({href, title, Icon}) => (
        <Link
          key={title}
          to={href}>
          <Icon/>
          <span>{title}</span>
        </Link>
      ))}
    </Links>
  )
}

