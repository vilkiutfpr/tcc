import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import CBMButton from "../../Atoms/Button/Button"
import CBMMainMenuContent from "./MainMenuContent"
import { CBMBox } from "../../Atoms/Box"

const CBMMainMenu = ({
    className,
    brandLogo,
    navItems,
    rightItem,
    leftItem,
    ...props
}) => {
    const classes = classNames("cbm-main-menu", className)

    const [visible, setVisible] = useState(false)

    return (
        <CBMBox className={classes} {...props}>
            {leftItem}
            <CBMButton
                onClick={() => setVisible(old => !old)}
                size='large'
                clear
                type='ghost'
                icon='menu'
            />
            {rightItem}
            <CBMMainMenuContent
                navItems={navItems}
                brandLogo={brandLogo}
                DrawerProps={{
                    visible,
                    onClose: () => setVisible(old => !old)
                }}
            />
        </CBMBox>
    )
}

CBMMainMenu.propTypes = {
    className: PropTypes.string,
    brandLogo: PropTypes.string,
    navItems: PropTypes.node,
    rightItem: PropTypes.node,
    leftItem: PropTypes.node
}
CBMMainMenu.defaultProps = {}

export default CBMMainMenu
