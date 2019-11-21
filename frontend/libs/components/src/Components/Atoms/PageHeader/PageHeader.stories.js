import React from 'react';
import { storiesOf } from '@storybook/react';
import CBMPageHeader from './PageHeader';

storiesOf('Atoms.PageHeader', module).add('Simple', () => <CBMPageHeader title="Summary" onGoBack={console.log} />);
