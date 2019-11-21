import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { CBMListItem } from "../List"
import CBMIcon from "../Icon/Icon"
import { CBMBox } from "../Box"

const CBMNavListItem = ({ className, onClick, children, extra, ...props }) => {
    const classes = classNames("cbm-nav-list-item", className)
    return (
        <CBMListItem
            onClick={onClick}
            className={classes}
            {...props}
            extra={
                <>
                    {extra}
                    <CBMIcon
                        className='cbm-nav-list-item--arrow ml-xs'
                        type='arrow-right'
                    />
                </>
            }
        >
            <CBMBox className='cbm-nav-list-item--content'>{children}</CBMBox>
        </CBMListItem>
    )
}

CBMNavListItem.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}
CBMNavListItem.defaultProps = {
    onClick: console.log
}

export default CBMNavListItem
