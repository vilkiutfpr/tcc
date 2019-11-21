import React from 'react'
import { storiesOf } from '@storybook/react'
import { CBMInput } from './'

import { boolean } from '@storybook/addon-knobs'

storiesOf('Atoms.Input', module).add('Default', () => (
    <CBMInput placeholder='Input placeholder' ghost={boolean('Ghost', false)} />
))
