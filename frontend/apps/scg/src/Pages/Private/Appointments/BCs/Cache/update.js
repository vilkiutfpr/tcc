import { GET_APPOINTMENTS } from "GraphQL/AppointmentsBC/Queries/appointments"
import moment from "@cbmsc/utils/dist/Moment"

export const updateAppointmentCacheOnUpdate = (
    cache,
    { data: { updateAppointment } },
    date
) => {
    let { appointmentsPerDate } = cache.readQuery({
        query: GET_APPOINTMENTS,
        variables: { date: moment(date).format("YYYY-MM-DD") }
    })

    appointmentsPerDate = appointmentsPerDate.map(item =>
        item.id !== updateAppointment.id ? item : updateAppointment
    )

    cache.writeQuery({
        query: GET_APPOINTMENTS,
        variables: { date: moment(date).format("YYYY-MM-DD") },
        data: {
            appointmentsPerDate
        }
    })
}
