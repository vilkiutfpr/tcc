import React, { forwardRef } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { DatePicker } from "antd"

const CBMDatePicker = forwardRef(({ className, fullWidth, ...props }, ref) => {
    const classes = classNames("cbm-date-picker", className, {
        "cbm-date-picker--full-width": fullWidth
    })
    return <DatePicker className={classes} {...props} />
})

CBMDatePicker.propTypes = Object.assign(
    {
        ...DatePicker["propTypes"]
    },
    {
        className: PropTypes.string
    }
)

CBMDatePicker.defaultProps = {
    fullWidth: true
}

export default CBMDatePicker
