import { GET_APPOINTMENTS } from "GraphQL/AppointmentsBC/Queries/appointments"
import moment from "@cbmsc/utils/dist/Moment"

export const updateAppointmentCacheOnCreate = (
    cache,
    { data: { createAppointment } },
    date
) => {
    let { appointmentsPerDate } = cache.readQuery({
        query: GET_APPOINTMENTS,
        variables: { date: moment(date).format("YYYY-MM-DD") }
    })

    appointmentsPerDate = [...appointmentsPerDate, { ...createAppointment }]

    cache.writeQuery({
        query: GET_APPOINTMENTS,
        variables: { date: moment(date).format("YYYY-MM-DD") },
        data: { appointmentsPerDate }
    })
}
