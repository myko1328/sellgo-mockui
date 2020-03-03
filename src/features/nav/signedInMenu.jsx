import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

const SignedInMenu = ({ signOut, currentUser }) => {
	return (
		<Menu.Item position='right'>
			<Image avatar spaced='right' src='/assets/user.png' />
			<Dropdown pointing='top left' text='name@gmail.com'>
				<Dropdown.Menu>
					<Dropdown.Item text='Create Event' icon='plus' />
					<Dropdown.Item text='My Events' icon='calendar' />
					<Dropdown.Item text='My Network' icon='users' />
					<Dropdown.Item text='My Profile' icon='user' />
					<Dropdown.Item
						to='/settings'
						text='Settings'
						icon='settings'
					/>
					<Dropdown.Item text='Sign Out' icon='power' />
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Item>
	);
};

export default SignedInMenu;