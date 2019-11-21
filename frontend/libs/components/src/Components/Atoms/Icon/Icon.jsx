import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

const CBMIcon = ({ className, ...props }) => {
    const classes = classNames('cbm-icon', className)
    return <Icon className={classes} {...props} />
}

CBMIcon.propTypes = Object.assign(
    { ...Icon['propTypes'] },
    {
        className: PropTypes.string
    }
)
CBMIcon.defaultProps = {}

export default CBMIcon
