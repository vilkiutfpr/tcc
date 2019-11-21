import React, { useMemo } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Drawer } from "antd"
import { useWindowSize } from "@cbmsc/utils/dist/Hooks"
import { CBMBox } from "../Box"

const CBMDrawer = ({
    className,
    dynamicPlacement,
    scrollable,
    placement,
    children,
    Actions,
    ...props
}) => {
    const classes = classNames("cbm-drawer", className, {
        "cbm-drawer--scrollable": scrollable
    })

    const { width } = useWindowSize()

    const placementBasedOnWidth = useMemo(
        () => (width > 992 ? "right" : "bottom"),
        [width]
    )

    return (
        <Drawer
            destroyOnClose
            closable={false}
            placement={dynamicPlacement ? placementBasedOnWidth : placement}
            className={classes}
            {...props}
        >
            <CBMBox className='d-flex align-items-center justify-content-flex-end mb-xl'>
                {Actions}
            </CBMBox>
            {children}
        </Drawer>
    )
}

CBMDrawer.propTypes = Object.assign(
    {
        ...Drawer["propTypes"]
    },
    {
        className: PropTypes.string,
        dynamicPlacement: PropTypes.bool,
        scrollable: PropTypes.bool,
        Actions: PropTypes.node
    }
)
CBMDrawer.defaultProps = {
    scrollable: true,
    dynamicPlacement: true
}

export default CBMDrawer
