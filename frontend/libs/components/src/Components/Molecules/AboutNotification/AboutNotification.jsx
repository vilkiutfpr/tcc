import React, { useCallback } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { CBMDrawer } from "../../Atoms/Drawer"
import { CBMTypography } from "../../Atoms/Typography"
import { CBMButton } from "../../Atoms/Button"
import { CBMBox } from "../../Atoms/Box"
import { CBMBadge } from "../../Atoms/Badge"

const CBMAboutNotification = ({
    item,
    onDelete,
    loadingDelete,
    onSeen,
    loadingOnSeen,
    className,
    onEdit,
    ...props
}) => {
    const classes = classNames("cbm-about-notification", className)

    const configureName = useCallback(
        status =>
            status === "danger"
                ? "Alta"
                : status === "warning"
                ? "Média"
                : "Baixa",
        [item]
    )

    return (
        <CBMDrawer
            scrollable
            zIndex={2}
            dynamicPlacement
            closable={false}
            className={classes}
            {...props}
            Actions={
                <>
                    <CBMButton
                        loading={loadingDelete}
                        onClick={() => onDelete(item)}
                        icon='delete'
                        shape='round'
                        type='danger'
                        className='mr-xs'
                        ghost
                    />
                    <CBMButton
                        onClick={() => onSeen(item)}
                        icon={item.read ? "eye" : "eye-invisible"}
                        shape='round'
                        type='warning'
                        ghost={item.read}
                        className='mr-xs'
                        loading={loadingOnSeen}
                    />
                    {onEdit && (
                        <CBMButton
                            onClick={() => onEdit(item)}
                            icon='edit'
                            shape='round'
                            type='primary'
                            ghost
                        />
                    )}
                </>
            }
        ></CBMDrawer>
    )
}

CBMAboutNotification.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    onDelete: PropTypes.func,
    onSeen: PropTypes.func,
    loadingDelete: PropTypes.bool
}
CBMAboutNotification.defaultProps = {}

export default CBMAboutNotification
