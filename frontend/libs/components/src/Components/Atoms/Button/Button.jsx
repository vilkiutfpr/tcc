import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Button } from "antd"

const CBMButton = ({ className, type, clear, ...props }) => {
    const classes = classNames("cbm-button", className, {
        "cbm-button--secondary": type === "secondary",
        "cbm-button--success": type === "success",
        "cbm-button--clear": clear
    })

    return <Button className={classes} type={type} {...props} />
}

CBMButton.propTypes = Object.assign(
    { ...Button["propTypes"] },
    {
        disabled: PropTypes.bool,
        clear: PropTypes.bool
    }
)
CBMButton.defaultProps = {}

export default CBMButton
