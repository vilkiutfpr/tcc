import React, { useCallback } from "react"
import { CBMBox } from "@cbmsc/components/dist/Components/Atoms/Box"
import { CBMList } from "@cbmsc/components/dist/Components/Atoms/List"
import { CBMAppointmentListItem } from "@cbmsc/components/dist/Components/Molecules/AppointmentListItem"

import moment from "@cbmsc/utils/dist/Moment"

import SbcAppointmentsListHeader from "./Header"

const SbcAppointmentsList = ({
    filter,
    setFilter,
    data,
    loading,
    openForm,
    onClick
}) => {
    const renderItems = useCallback(
        item => (
            <CBMAppointmentListItem
                onClick={() => onClick(item)}
                key={item.id}
                date={moment(item.start).format("dddd, DD MMMM")}
                startTime={moment(item.start).format("HH:mm")}
                endTime={moment(item.end).format("DD/MM HH:mm")}
                responsible={item.user.name}
            />
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    const onFilter = ({ name, value }) => {
        setFilter(old => ({
            ...old,
            [name]: new Date(value)
        }))
    }

    return (
        <CBMBox className='sbc-appointments__list'>
            <SbcAppointmentsListHeader
                openForm={openForm}
                values={filter}
                onChange={onFilter}
            />
            <CBMBox>
                <CBMList
                    dataSource={data}
                    loading={loading}
                    renderItem={renderItems}
                />
            </CBMBox>
        </CBMBox>
    )
}
export default SbcAppointmentsList
