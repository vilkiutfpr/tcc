import React from 'react'
import { storiesOf } from '@storybook/react'
import CBMIcon from './Icon'
import { text } from '@storybook/addon-knobs'

storiesOf('Atoms.Icon', module).add('Simple', () => (
    <CBMIcon type={text('Type', 'home')} />
))
