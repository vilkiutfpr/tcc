import React from "react"

import { CBMBox } from "../../Atoms/Box"
import { CBMButton } from "../../Atoms/Button"
import { CBMSelect } from "../../Atoms/Select"
import { Select } from "antd"

const CBMCalendarToolbar = ({ onSelectView, view, onNavigate }) => (
    <CBMBox className='cbm-calendar__toolbar'>
        <CBMBox className='cbm-calendar__toolbar__actions'>
            <CBMButton
                onClick={() => onNavigate("back")}
                shape='round'
                icon='arrow-left'
                type='primary'
                ghost
            />
            <CBMButton
                onClick={() => onNavigate("today")}
                className='ml-sm mr-sm'
                shape='round'
            >
                Hoje
            </CBMButton>
            <CBMButton
                onClick={() => onNavigate("next")}
                shape='round'
                icon='arrow-right'
                type='primary'
                ghost
            />
        </CBMBox>
        <CBMSelect
            size='large'
            style={{ width: 200 }}
            shape='round'
            icon='arrow-right'
            defaultValue={view}
            value={view}
            onChange={value => onSelectView(value)}
        >
            <Select.Option value='day'>Dia</Select.Option>
            <Select.Option value='week'>Semana</Select.Option>
        </CBMSelect>
    </CBMBox>
)

export default CBMCalendarToolbar
