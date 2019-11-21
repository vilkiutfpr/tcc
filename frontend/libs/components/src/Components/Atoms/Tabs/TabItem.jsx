import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'

const { TabPane } = Tabs

const CBMTabItem = ({ className, ...props }) => {
    const classes = classNames('cbm-tabs--item', className)
    return <TabPane className={classes} {...props} />
}

CBMTabItem.propTypes = Object.assign(
    {
        ...TabPane['propTypes']
    },
    {
        className: PropTypes.string
    }
)
CBMTabItem.defaultProps = {}

export default CBMTabItem
