import React from 'react'
import { storiesOf } from '@storybook/react'
import CBMDrawer from './Drawer'

storiesOf('Atoms.Drawer', module).add('Simple', () => (
    <CBMDrawer visible={true}>Drawer</CBMDrawer>
))
