import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Input } from 'antd'

const CBMInput = forwardRef(({ className, ghost, ...props }, ref) => {
    const classes = classNames('cbm-input', className, {
        'cbm-input--ghost': ghost
    })

    return <Input className={classes} {...props} />
})

CBMInput.propTypes = Object.assign(
    { ...Input['propTypes'] },
    {
        ghost: PropTypes.bool
    }
)

export default CBMInput
