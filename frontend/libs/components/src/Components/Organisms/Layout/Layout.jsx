import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import CBMLayoutContent from "./Content"
import { CBMMainMenu } from "../MainMenu"
import { CBMNotificationDrawer } from "../NotificationDrawer"
import { CBMPageHeader } from "../../Atoms/PageHeader"
import { useWindowSize } from "@cbmsc/utils/dist/Hooks"
import { CBMBox } from "../../Atoms/Box"

const CBMLayout = ({
    className,
    PageHeaderProps,
    MenuProps,
    NotificationProps,
    children,
    ...props
}) => {
    const classes = classNames("cbm-layout", className, {})
    const { width } = useWindowSize()

    return (
        <CBMBox className={classes} {...props}>
            <CBMBox className='cbm-layout__container'>
                {/* //TODO: validate with no header */}
                <CBMPageHeader
                    className='mb-sm'
                    title={width < 992 && PageHeaderProps.title}
                    onBack={width < 992 && PageHeaderProps.onBack}
                    breadcrumb={width > 992 && PageHeaderProps.breadcrumb}
                />
                <CBMLayoutContent
                // noHeader={!PageHeaderProps.title && !PageHeaderProps.onBack}
                >
                    {children}
                </CBMLayoutContent>
            </CBMBox>
            <CBMMainMenu {...MenuProps} />
            <CBMNotificationDrawer {...NotificationProps} />
        </CBMBox>
    )
}

// FIXME: how to use with extends props?
CBMLayout.propTypes = {
    className: PropTypes.string
    // MenuProps: { ...CBMMainMenu["propTypes"] },
    // NotificationProps: { ...CBMNotificationDrawer["propTypes"] },
    // HeaderProps: { ...CBMPageHeader["propTypes"] }
}
CBMLayout.defaultProps = {}

export default CBMLayout
