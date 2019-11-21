import React from 'react';
import { storiesOf } from '@storybook/react';
import CBMBadge from './Badge';

import { select, text, boolean, number } from '@storybook/addon-knobs';

const colorOptions = {
	Primary: 'primary',
	Secondary: 'secondary',
	Default: 'default'
};

storiesOf('Atoms.Badge', module).add('Simple', () => (
	<CBMBadge
		color={select('Color', colorOptions)}
		Component={text('Component', 'span')}
		rounded={boolean('Rounded', false)}
		value={number('Value', 10)}
		label={text('Label', 'Label')}
	/>
));
