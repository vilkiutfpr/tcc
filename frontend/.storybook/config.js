import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import TableComponent from './TableComponent'

import './style.less'

const brandImage = require('./brand.png')

const DefaultAppViewer = (story, { parameters }) => (
    <div
        style={
            parameters.style
                ? parameters.style
                : {
                      padding: 20,
                      minHeight: '200px',
                      backgroundColor: '#f7f8f9'
                  }
        }
    >
        {story()}
    </div>
)

addDecorator(withKnobs)
addDecorator(DefaultAppViewer)
addDecorator(
    withInfo({
        header: false,
        TableComponent,
        source: false,
        inline: true,
        propTablesExclude: [() => 'div', () => 'span'],
        styles: stylesheet => ({
            ...stylesheet,
            propTableHead: {
                display: 'none'
            },
            infoBody: {
                ...stylesheet.infoBody,
                border: 'none',
                margin: '30px 0 0 0',
                padding: 0
            }
        })
    })
)
addParameters({
    options: {
        theme: {
            colorPrimary: '#174C6A',
            colorSecondary: '#C8102E',
            brandTitle: '@CBMSC',
            brandImage
        }
    }
})

// automatically import all files ending in *.stories.js
const reqLibComponents = require.context(
    '../libs/components/src',
    true,
    /\.stories\.js$/
)

function loadStories() {
    const componentsSort = [
        'elements',
        'atoms',
        'molecules',
        'organisms',
        'templates',
        'pages'
    ]
    reqLibComponents
        .keys()
        .sort(
            (a, b) =>
                componentsSort.indexOf(a.split('/')[1]) -
                componentsSort.indexOf(b.split('/')[1])
        )
        .forEach(filename => reqLibComponents(filename))
}

configure(loadStories, module)
