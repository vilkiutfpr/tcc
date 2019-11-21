import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import { List } from 'antd'

const CBMListItem = ({ className, asCards, rounded, ...props }) => {
    const classes = classNames('cbm-list--item', className, {
        'cbm-list--item--as-cards': asCards,
        'cbm-list--item--rounded': rounded
    })

    return <List.Item className={classes} {...props} />
}

CBMListItem.propTypes = Object.assign(
    { ...List.Item['propTypes'] },
    {
        asCards: PropTypes.bool,
        rounded: PropTypes.bool
    }
)

CBMListItem.defaultProps = {
    asCards: true,
    rounded: true
}

export default CBMListItem
