import React, { useState } from "react"

import { NavLink } from "react-router-dom"

import { CBMLayout } from "@cbmsc/components/dist/Components/Organisms/Layout"
import { CBMIcon } from "@cbmsc/components/dist/Components/Atoms/Icon"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"

import brandLogo from "Assets/Brand/cbmsc.png"
import { useLayoutContext } from "./Context"

const ScgLayout = ({ children }) => {
    const [notificationOpen, setNotificationOpen] = useState(false)
    const { headerInfo } = useLayoutContext()

    const logout = () => {
        localStorage.clear()
    }

    const navItems = [
        // <NavLink to='/inicio' activeClassName='item-active'>
        //     <CBMIcon className='mr-sm' type='home' />
        //     Home
        // </NavLink>,
        <NavLink to='/agenda/bcs' activeClassName='item-active'>
            <CBMIcon className='mr-sm' type='calendar' />
            Agenda BCs
        </NavLink>,
        <NavLink to='/avisos' activeClassName='item-active'>
            <CBMIcon className='mr-sm' type='notification' />
            Avisos
        </NavLink>,
        <NavLink to='/tarefas' activeClassName='item-active'>
            <CBMIcon className='mr-sm' type='snippets' />
            Tarefas
        </NavLink>,
        <NavLink to='/usuarios' activeClassName='item-active'>
            <CBMIcon className='mr-sm' type='team' />
            Usuários
        </NavLink>,
        <NavLink to='/auth' onClick={logout}>
            <CBMIcon className='mr-sm' type='logout' />
            Sair
        </NavLink>
    ]

    const NotificationProps = {
        visible: notificationOpen,
        onClose: () => setNotificationOpen(old => !old),
        AboutNotificationProps: {
            onDelete: item => console.log(item),
            onSeen: item => console.log(item)
        },
        ReadListProps: {
            dataSource: []
        },
        NotReadListProps: {
            dataSource: []
        }
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

export default ScgLayout
