import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { CBMNavListItem } from '../NavListItem'
import CBMTypography from '../Typography/Typography'

const CBMStatusListItem = ({
    className,
    title,
    subtitle,
    status,
    ...props
}) => {
    const classes = classNames('cbm-status-list-item', className, {
        [`cbm-status-list-item--${status}`]: status
    })
    return (
        <CBMNavListItem className={classes} {...props}>
            <CBMTypography ellipsis variant='body' strong>
                {title}
            </CBMTypography>
            <CBMTypography ellipsis variant='caption'>
                {subtitle}
            </CBMTypography>
        </CBMNavListItem>
    )
}

CBMStatusListItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    status: PropTypes.oneOf(['default', 'success', 'warning', 'danger'])
}
CBMStatusListItem.defaultProps = {}

export default CBMStatusListItem
