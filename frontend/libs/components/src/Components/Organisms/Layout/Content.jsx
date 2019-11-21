import React from "react"
import classNames from "classnames"
import { CBMBox } from "../../Atoms/Box"

const CBMLayoutContent = ({ ...props }) => {
    const classes = classNames("cbm-layout__content", {})

    return <CBMBox className={classes} {...props} />
}

export default CBMLayoutContent
