import React, { forwardRef } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { Input } from "antd"

const { TextArea } = Input

const CBMTextArea = forwardRef(({ className, ...props }, ref) => {
    const classes = classNames("cbm-text-area", className)
    return <TextArea className={classes} {...props} />
})

CBMTextArea.propTypes = Object.assign(
    { ...TextArea["propTypes"] },
    {
        className: PropTypes.string
    }
)

CBMTextArea.defaultProps = {}

export default CBMTextArea
