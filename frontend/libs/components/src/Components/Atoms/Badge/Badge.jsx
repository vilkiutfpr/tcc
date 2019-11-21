import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { CBMBox } from "../Box"
import { CBMIcon } from "../Icon"

const CBMBadge = ({
    className,
    color,
    rounded,
    Component,
    value,
    label,
    loading,
    ...props
}) => {
    const classes = classNames("cbm-badge", className)
    const classesDot = classNames("cbm-badge__dot", {
        [`cbm-badge__dot--${color}`]: color,
        "cbm-badge__dot--rounded": rounded
    })

    return (
        <Component className={classes} {...props}>
            {!loading ? (
                <CBMBox className={classesDot}>{value}</CBMBox>
            ) : (
                <CBMIcon type='loading' className='mr-xs' />
            )}
            {label}
        </Component>
    )
}

CBMBadge.propTypes = {
    className: PropTypes.string,
    Component: PropTypes.string,
    rounded: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string
    // color: PropTypes.oneOfType(["primary", "secondary", "default", "danger"])  // FIXME
}
CBMBadge.defaultProps = {
    color: "default",
    Component: "span"
}

export default CBMBadge
