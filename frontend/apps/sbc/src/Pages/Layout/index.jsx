import React, { useState } from "react"

import { NavLink } from "react-router-dom"

import { CBMLayout } from "@cbmsc/components/dist/Components/Organisms/Layout"
import { CBMIcon } from "@cbmsc/components/dist/Components/Atoms/Icon"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"

import brandLogo from "Assets/Brand/bc.png"
import { useLayoutContext } from "./Context"
import { GET_NOTICES } from "GraphQL/Notices/Query/Notices"
import { useQuery } from "@apollo/react-hooks"

const SbcLayout = ({ children }) => {
    const [notificationOpen, setNotificationOpen] = useState(false)
    const { headerInfo } = useLayoutContext()

    const logout = () => {
        localStorage.clear()
    }

    const navItems = [
        <NavLink to='/inicio' activeClassName='item-active'>
            <CBMIcon className='mr-sm' type='home' />
            Home
        </NavLink>,
        <NavLink to='/agendamentos' activeClassName='item-active'>
            <CBMIcon className='mr-sm' type='calendar' />
            Agendamentos
        </NavLink>,
        <NavLink to='/tarefas' activeClassName='item-active'>
            <CBMIcon className='mr-sm' type='snippets' />
            Tarefas
        </NavLink>,
        <NavLink to='/auth' onClick={logout}>
            <CBMIcon className='mr-sm' type='logout' />
            Sair
        </NavLink>
    ]

    const { data: notices, loading: noticesLoading } = useQuery(GET_NOTICES)

    const NotificationProps = {
        visible: notificationOpen,
        onClose: () => setNotificationOpen(old => !old),
        AboutNotificationProps: {
            onDelete: item => console.log(item),
            onSeen: item => console.log(item)
        },
        Items: (notices && notices.userNotices) || []
    }

    const MenuProps = {
        navItems,
        brandLogo,
        leftItem: <CBMButton size='large' clear type='ghost' icon='home' />,
        rightItem: (
            <CBMButton
                size='large'
                clear
                type='ghost'
                icon='notification'
                onClick={() => setNotificationOpen(old => !old)}
            />
        )
    }

    return (
        <CBMLayout
            MenuProps={MenuProps}
            NotificationProps={NotificationProps}
            PageHeaderProps={headerInfo}
        >
            {children}
        </CBMLayout>
    )
}

export default SbcLayout
