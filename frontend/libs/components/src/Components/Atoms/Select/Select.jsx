import React, { forwardRef } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Select } from "antd"

const CBMSelect = forwardRef(({ className, ...props }, ref) => {
    const classes = classNames("cbm-select", className)
    return <Select className={classes} {...props} />
})

CBMSelect.propTypes = Object.assign(
    { ...Select["propTypes"] },
    {
        className: PropTypes.string
    }
)
CBMSelect.defaultProps = {}

export default CBMSelect
