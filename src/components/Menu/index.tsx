import React, { useState } from 'react';

import { Button, Sidebar, Icon, DesktopMenu, DesktopMenuItem, MobileMenu } from './styles';

const Menu = () => {

  const [mobileSidebar, setMobileSidebar] = useState<boolean>(false)

  const [items] = useState<string[]>([
    'Sobre', 'Portfólio', 'Contato'
  ])

  return (
    <div id="component-menu">
      <DesktopMenu>
        {
          items.map(item => (
            <DesktopMenuItem key={item}>{item}</DesktopMenuItem>
          ))
        }
      </DesktopMenu>

      <MobileMenu active={mobileSidebar}>
        <Sidebar>
          {
            items.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        </Sidebar>
        <Button onClick={() => setMobileSidebar(!mobileSidebar)}>
          <Icon />
        </Button>
      </MobileMenu>
    </div>
  );
}

export default Menu;
