import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'

const CBMTabs = ({ className, type, ...props }) => {
    const classes = classNames('cbm-tabs', className, {
        [`cbm-tabs--${type}`]: type
    })
    return <Tabs className={classes} {...props} />
}

CBMTabs.propTypes = Object.assign(
    {
        ...Tabs['propTypes']
    },
    {
        className: PropTypes.string,
        type: PropTypes.oneOf(['secondary'])
    }
)
CBMTabs.defaultProps = {}

export default CBMTabs
