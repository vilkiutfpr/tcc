import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import SbcAppointmentsList from "./List"

import { CBMCalendar } from "@cbmsc/components/dist/Components/Molecules/Calendar"
import moment from "@cbmsc/utils/dist/Moment"
import { convertDateToBigCalendar } from "@cbmsc/utils/dist/ConvertDateToBigCalendar"
import { useQuery } from "@apollo/react-hooks"
import { GET_APPOINTMENTS } from "GraphQL/Appointments/Queries/appointments"
import { useAuthContext } from "Hooks/Auth"
import { CBMDrawer } from "@cbmsc/components/dist/Components/Atoms/Drawer"
import SbcAppointmentsForm from "./Form"
import { useLayoutContext } from "Pages/Layout/Context"

const routes = [
    {
        path: "/",
        breadcrumbName: "Home"
    },
    {
        path: "/agendamentos",
        breadcrumbName: "Agendamentos"
    }
]

const SbcAppointments = () => {
    const { me } = useAuthContext()
    const [showForm, setShowForm] = useState(false)
    const [item, setItem] = useState(false)
    const { setHeaderInfo } = useLayoutContext()
    const history = useHistory()

    useEffect(() => {
        setHeaderInfo({
            onBack: () => history.push("/"),
            title: "Agenda",
            breadcrumb: { routes }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [filter, setFilter] = useState({
        start: moment(new Date()),
        end: moment(new Date()).add("day", 5)
    })

    const { data, loading } = useQuery(GET_APPOINTMENTS, {
        variables: {
            where: {
                start: moment(filter.start).format("YYYY-MM-DD"),
                end: moment(filter.end).format("YYYY-MM-DD"),
                user: { role: "BC" }
            }
        }
    })

    const onSelectEvent = event => {
        if (event.user.id === me.id) {
            setShowForm(true)
            setItem(event)
        }
    }

    return (
        <>
            <SbcAppointmentsList
                loading={loading}
                data={data && data.appointments}
                filter={filter}
                setFilter={setFilter}
                openForm={() => setShowForm(true)}
                onClick={onSelectEvent}
            />

            <CBMCalendar
                loading={loading}
                className='sbc-appointments__calendar'
                date={filter.start}
                onNavigate={date => {
                    setFilter(old => ({
                        ...old,
                        start: date
                    }))
                }}
                onSelectEvent={onSelectEvent}
                events={
                    (data &&
                        data.appointments.map(item => ({
                            ...item,
                            title: item.user.name,
                            start: convertDateToBigCalendar(item.start),
                            end: convertDateToBigCalendar(item.end)
                        }))) ||
                    []
                }
            />

            <CBMDrawer
                width={500}
                visible={showForm}
                onClose={() => {
                    setShowForm(false)
                    setItem()
                }}
            >
                <SbcAppointmentsForm
                    filter={filter}
                    onClose={() => setShowForm(false)}
                    defaultValues={item ? item : { start: filter.start }}
                />
            </CBMDrawer>
        </>
    )
}

export default SbcAppointments
