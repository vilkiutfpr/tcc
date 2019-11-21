import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Card } from 'antd'

const CBMCard = ({ className, ...props }) => {
    const classes = classNames('cbm-card', className)
    return <Card className={classes} {...props} />
}

CBMCard.propTypes = {
    className: PropTypes.string
}
CBMCard.defaultProps = {}

export default CBMCard
