import React from 'react';
import { storiesOf } from '@storybook/react';
import CBMMainMenu from './MainMenu';
import CBMIcon from '../../Atoms/Icon/Icon';
import CBMButton from '../../Atoms/Button/Button';
import { CBMBox } from '../../Atoms/Box';

import brandLogo from '../../../Assets/cbmsc.png';

const items = [
	<CBMBox>
		<CBMIcon className="mr-sm" type="home" />
		Home
	</CBMBox>,
	<CBMBox>
		<CBMIcon className="mr-sm" type="user" />
		My Profile
	</CBMBox>
];

storiesOf('Organisms.MainMenu', module).add('Simple', () => (
	<CBMMainMenu
		brandLogo={brandLogo}
		navItems={items}
		leftItem={<CBMButton size="large" clear type="ghost" icon="home" />}
		rightItem={<CBMButton size="large" clear type="ghost" icon="notification" />}
	/>
));
