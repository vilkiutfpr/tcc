import React from 'react'
import { storiesOf } from '@storybook/react'
import CBMTypography from './Typography'

import { select, boolean, text } from '@storybook/addon-knobs'

const alignOptions = {
    Default: null,
    Center: 'center'
}

const levelOptions = {
    Default: null,
    1: '1',
    2: '2',
    3: '3',
    4: '4'
}

const variantOptions = {
    Subtitle: 'subtitle',
    Body: 'body',
    Caption: 'caption',
    SubCaption: 'sub-caption',
    Overline: 'overline'
}

storiesOf('Atoms.Typography', module).add('Simple', () => (
    <CBMTypography
        align={select('Align', alignOptions)}
        level={select('Level', levelOptions)}
        variant={select('Variant', variantOptions)}
        regular={boolean('Regular', false)}
        strong={boolean('Strong', false)}
        ellipsis={boolean('Ellipsis', false)}
        italic={boolean('Italic', false)}
        component={text('Component', 'div')}
    >
        Typography
    </CBMTypography>
))
