import * as React from 'react';
import Button, { SelectedBtn } from '../../Button';
import { SidebarNav } from './About';

interface ButtonsProps {
  page: string;
  handleClick: (page: string) => void;
}

const Buttons: React.SFC<ButtonsProps> = ({ handleClick, page }) => {
  switch (page) {
    case 'site':
      return (
        <SidebarNav>
          <SelectedBtn disabled={true}>About Site</SelectedBtn>
          <Button name="rod" onClick={() => handleClick('rod')}>About Rod</Button>
          <Button name="contact" onClick={() => handleClick('contact')}>Contact</Button>
        </SidebarNav>
      );
    case 'rod':
      return (
        <SidebarNav>
          <Button name="about" onClick={() => handleClick('site')}>About Site</Button>
          <SelectedBtn disabled={true}>About Rod</SelectedBtn>
          <Button name="contact" onClick={() => handleClick('contact')}>Contact</Button>
        </SidebarNav>
      );

    default:
      return (
        <SidebarNav>
          <Button name="about" onClick={() => handleClick('site')}>About Site</Button>
          <Button name="rod" onClick={() => handleClick('rod')}>About Rod</Button>
          <SelectedBtn disabled={true}>Contact</SelectedBtn>
        </SidebarNav>
      );
  }
};

export default Buttons;