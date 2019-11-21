import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Skeleton } from "antd"

const CBMSkeleton = ({ className, ...props }) => {
    const classes = classNames("cbm-skeleton", className)
    return <Skeleton className={classes} {...props} />
}

CBMSkeleton.propTypes = {
    className: PropTypes.string
}
CBMSkeleton.defaultProps = {}

export default CBMSkeleton
