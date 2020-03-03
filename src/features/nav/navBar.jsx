import React from 'react'
import {Menu, Container, Button, Icon, Label } from 'semantic-ui-react';

import './navBar.css';
import SignedInMenu from './signedInMenu';

const NavMenu = () => {
    return (
      <Menu inverted fixed='top' borderless>
          <Container>
            <Menu.Item  exact to='/' header>
                <img src='assets/logo.png' alt='logo' />
            </Menu.Item>
            <Menu.Item position='right'>
            <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='zoom' />
                Profit Finder
            </Button>
            <Label as='a' basic color='white' pointing='left'>
              <Icon name='rss' />
                Product Tracker
              </Label>
              </Button>
              </Menu.Item>
              <Menu.Item position='right'>
                <Icon name='bell outline' size='big' inverted />
              </Menu.Item>
              <SignedInMenu />
            </Container>
      </Menu>
    )
}


export default NavMenu;