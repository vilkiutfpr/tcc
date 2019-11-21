import React, { forwardRef } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Switch } from "antd"

const CBMSwitch = forwardRef(({ className, ...props }, ref) => {
    const classes = classNames("cbm-switch", className)
    return <Switch className={classes} {...props} />
})

CBMSwitch.propTypes = Object.assign(
    { ...Switch["propTypes"] },
    {
        className: PropTypes.string
    }
)
CBMSwitch.defaultProps = {}

export default CBMSwitch
