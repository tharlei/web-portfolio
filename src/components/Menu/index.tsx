import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  MobileButtonClose,
  MobileMenuList,
  MobileMenuItem,
  Icon,
  DesktopMenu,
  DesktopMenuItem,
  MobileMenu,
} from "./styles";

interface ItemMenu {
  id: number;
  title: string;
  url: string;
  redirect: string;
}

const Menu = () => {
  const [mobileSidebar, setMobileSidebar] = useState<boolean>(false);

  const [items] = useState<ItemMenu[]>([
    // {
    //   id: 2,
    //   title: 'Sobre',
    //   url: '/about',
    //   redirect: '/contact'
    // },
    // {
    //   id: 3,
    //   title: 'Contato',
    //   url: '/contact',
    //   redirect: '/'
    // },
  ]);

  return (
    <div id="component-menu">
      <DesktopMenu>
        {items.map((item) => (
          <DesktopMenuItem key={item.id}>
            <Link to={item.url}>{item.title}</Link>
          </DesktopMenuItem>
        ))}
      </DesktopMenu>

      <MobileMenu active={mobileSidebar}>
        <MobileMenuList>
          {items.map((item) => (
            <MobileMenuItem
              key={item.id}
              onClick={() => setMobileSidebar(!mobileSidebar)}
            >
              <Link to={item.url}>{item.title}</Link>
            </MobileMenuItem>
          ))}
        </MobileMenuList>
        <MobileButtonClose onClick={() => setMobileSidebar(!mobileSidebar)}>
          <Icon />
        </MobileButtonClose>
      </MobileMenu>
    </div>
  );
};

export default Menu;
