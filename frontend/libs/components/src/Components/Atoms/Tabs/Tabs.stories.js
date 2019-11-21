import React from 'react'
import { storiesOf } from '@storybook/react'
import CBMTabs from './Tabs'
import CBMTabItem from './TabItem'

import { select } from '@storybook/addon-knobs'

const typeOptions = {
    Default: 'default',
    Secondary: 'secondary'
}

storiesOf('Atoms.Tabs', module).add('Simple', () => (
    <CBMTabs type={select('Type', typeOptions)}>
        <CBMTabItem tab='Tab 1' key='1'>
            1
        </CBMTabItem>
        <CBMTabItem tab='Tab 2' key='2'>
            2
        </CBMTabItem>
        <CBMTabItem tab='Tab 3' key='3'>
            3
        </CBMTabItem>
    </CBMTabs>
))
