import React from "react"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"
import { CBMBox } from "@cbmsc/components/dist/Components/Atoms/Box"
import { CBMDatePicker } from "@cbmsc/components/dist/Components/Atoms/DatePicker"

const SbcAppointmentsListHeader = ({ onChange, values, openForm }) => (
    <CBMBox className='sbc-appointments__list__header mb-lg'>
        <CBMButton
            onClick={openForm}
            className='sbc-appointments__list__header--button'
            type='secondary'
            icon='plus'
        >
            Agendar novo horário
        </CBMButton>
        <CBMBox className='d-flex'>
            <CBMDatePicker
                format='DD/MM/YYYY'
                value={values.start}
                defaultValue={values.start}
                onChange={date => onChange({ name: "start", value: date })}
                size='large'
                placeholder='Início'
            />
            <CBMDatePicker
                format='DD/MM/YYYY'
                value={values.end}
                defaultValue={values.end}
                onChange={date => onChange({ name: "end", value: date })}
                size='large'
                className='ml-sm'
                placeholder='Fim'
            />
        </CBMBox>
    </CBMBox>
)

export default SbcAppointmentsListHeader
