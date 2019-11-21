import React from 'react'
import { storiesOf } from '@storybook/react'
import { CBMButton } from './'
import { select } from '@storybook/addon-knobs'

const typeOptions = {
    Default: 'default',
    Primary: 'primary',
    Secondary: 'secondary',
    Ghost: 'ghost',
    Dashed: 'dashed',
    Danger: 'danger',
    Link: 'link'
}

storiesOf('Atoms.Button', module).add('Default', () => (
    <CBMButton type={select('Type', typeOptions)}>Button</CBMButton>
))
