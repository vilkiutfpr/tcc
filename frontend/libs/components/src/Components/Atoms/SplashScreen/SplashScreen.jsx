import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { CBMIcon } from "../Icon"

const CBMSplashScreen = ({ className, image, ...props }) => {
    const classes = classNames("cbm-splash-screen", className)
    return (
        <div className={classes} {...props}>
            <img src={image} alt='logo' />
            <CBMIcon type='loading' />
        </div>
    )
}

CBMSplashScreen.propTypes = {
    className: PropTypes.string
}
CBMSplashScreen.defaultProps = {}

export default CBMSplashScreen
