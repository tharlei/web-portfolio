import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import { MobileButtonClose, MobileMenuList, MobileMenuItem, Icon, DesktopMenu, DesktopMenuItem, MobileMenu } from './styles';

interface ItemMenu {
  id: number;
  title: string;
  url: string;
  redirect: string;
}

const Menu = () => {

  const [mobileSidebar, setMobileSidebar] = useState<boolean>(false)

  const [items] = useState<ItemMenu[]>([
    {
      id: 2,
      title: 'Sobre',
      url: '/about',
      redirect: '/contact'
    },
    {
      id: 3,
      title: 'Contato',
      url: '/contact',
      redirect: '/'
    },
  ])

  function handleDownload() {
    ReactGA.event({
      category: 'Curriculo',
      action: `Open your Curriculo`
    });

    window.open('/Curriculo.pdf');
  }

  return (
    <div id="component-menu">
      <DesktopMenu>
        {
          items.map(item => (
            <DesktopMenuItem key={item.id}>
              <Link to={item.url}>{item.title}</Link>
            </DesktopMenuItem>
          ))
        }
        <DesktopMenuItem onClick={handleDownload}>Currículo</DesktopMenuItem>
      </DesktopMenu>

      <MobileMenu active={mobileSidebar}>
        <MobileMenuList>
          {
            items.map(item => (
              <MobileMenuItem key={item.id} onClick={() => setMobileSidebar(!mobileSidebar)}>
                <Link to={item.url}>{item.title}</Link>
              </MobileMenuItem>
            ))
          }
          <MobileMenuItem onClick={handleDownload}>Currículo</MobileMenuItem>
        </MobileMenuList>
        <MobileButtonClose onClick={() => setMobileSidebar(!mobileSidebar)}>
          <Icon />
        </MobileButtonClose>
      </MobileMenu>
    </div >
  );
}

export default Menu;
