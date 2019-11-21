import React from 'react'
import { storiesOf } from '@storybook/react'
import SignIn from './SignIn'

storiesOf('Pages.SignIn', module).add('Simple', () => <SignIn />, {
    style: {
        padding: 0,
        minHeight: '100vh'
    }
})
