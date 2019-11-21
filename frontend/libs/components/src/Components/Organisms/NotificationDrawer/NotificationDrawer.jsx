import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { CBMDrawer } from "../../Atoms/Drawer"
import { CBMTabs, CBMTabItem } from "../../Atoms/Tabs"
import { CBMList } from "../../Atoms/List"
import { CBMNotificationListItem } from "../../Molecules/NotificationListItem"
import { useWindowSize } from "@cbmsc/utils/dist/Hooks"
import CBMAboutNotification from "../../Molecules/AboutNotification/AboutNotification"

const CBMNotificationDrawer = ({
    className,
    visible,
    onClose,
    Items,
    ReadListProps,
    AboutNotificationProps,
    children,
    ...props
}) => {
    const [item, setItem] = useState({})
    const [aboutVisible, setAboutVisible] = useState(false)
    const { width } = useWindowSize()
    const classes = classNames("cbm-notification-drawer", className)

    const onSelect = item => {
        setItem(item)
        setAboutVisible(true)
    }

    const onCloseAbout = () => {
        setAboutVisible(false)
        setItem({})
    }

    return (
        <CBMDrawer
            visible={visible}
            onClose={onClose}
            maskClosable
            closable={false}
            placement={width > 992 ? "right" : "bottom"}
            width='25vw'
            className={classes}
            {...props}
        >
            <CBMList
                dataSource={Items}
                renderItem={(item, index) => (
                    <CBMNotificationListItem
                        key={index}
                        color={item.color}
                        title={item.title}
                        description={item.description}
                        onClick={() => onSelect(item)}
                    />
                )}
            />
            <CBMAboutNotification
                width='25vw'
                onClose={onCloseAbout}
                item={item}
                visible={aboutVisible}
                {...AboutNotificationProps}
            />
        </CBMDrawer>
    )
}

CBMNotificationDrawer.propTypes = Object.assign(
    { ...CBMDrawer["propTypes"] },
    {
        className: PropTypes.string,
        Items: PropTypes.object,
        ReadListProps: PropTypes.object,
        AboutNotificationProps: PropTypes.object
    }
)
CBMNotificationDrawer.defaultProps = {}

export default CBMNotificationDrawer
