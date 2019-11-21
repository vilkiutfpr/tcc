import React, { useMemo } from "react"
import PropTypes from "prop-types"

import { CBMDrawer } from "../../Atoms/Drawer"
import CBMIcon from "../../Atoms/Icon/Icon"

import { useWindowSize } from "@cbmsc/utils/dist/Hooks"

import logo from "../../../Assets/cbmsc.png"
import CBMMainMenuNavItems from "./MainMenuNavItems"
import { CBMBox } from "../../Atoms/Box"

const CBMMainMenuContent = ({ DrawerProps, brandLogo, navItems }) => {
    const { width } = useWindowSize()

    const placement = useMemo(() => (width > 992 ? "left" : "bottom"), [width])

    return (
        <CBMDrawer
            className='cbm-main-menu__content'
            maskClosable
            placement={placement}
            dynamicPlacement={false}
            scrollable={false}
            {...DrawerProps}
        >
            {DrawerProps.visible && (
                <>
                    <CBMBox
                        className='cbm-main-menu__content--close'
                        shape='circle'
                        size='large'
                        onClick={DrawerProps.onClose}
                    >
                        <CBMIcon type='close' />
                    </CBMBox>
                </>
            )}
            <img
                src={brandLogo}
                alt='Logo'
                className='cbm-main-menu__content--brand'
            />
            <CBMMainMenuNavItems
                onClick={DrawerProps.onClose}
                items={navItems}
            />
        </CBMDrawer>
    )
}

CBMMainMenuContent.propTypes = {
    // DrawerProps: CBMDrawer['propTypes'], //FIXME
    brandLogo: PropTypes.string,
    navItems: PropTypes.node
}

CBMMainMenuContent.defaultProps = {
    brandLogo: logo
}

export default CBMMainMenuContent
