import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Select } from "antd"

const CBMOptionSelect = ({ className, ...props }) => {
    const classes = classNames("cbm-Optionselect", className)
    return <Select.Option className={classes} {...props} />
}

CBMOptionSelect.propTypes = Object.assign(
    { ...Option["propTypes"] },
    {
        className: PropTypes.string
    }
)
CBMOptionSelect.defaultProps = {}

export default CBMOptionSelect
