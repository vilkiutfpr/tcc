import React from 'react'
import { storiesOf } from '@storybook/react'
import { CBMRow, CBMCol } from './'

storiesOf('Atoms.Grid', module).add('Simple', () => (
    <CBMRow>
        <CBMCol span={12}>12</CBMCol>
        <CBMCol span={6}>6</CBMCol>
        <CBMCol span={6}>6</CBMCol>
    </CBMRow>
))
