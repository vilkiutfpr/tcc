import { GET_APPOINTMENTS } from "GraphQL/AppointmentsBC/Queries/appointments"
import moment from "@cbmsc/utils/dist/Moment"

export const updateAppointmentCacheOnDelete = (
    cache,
    { data: { deleteAppointment } },
    date
) => {
    console.log(moment(date).format("YYYY-MM-DD"))
    let { appointmentsPerDate } = cache.readQuery({
        query: GET_APPOINTMENTS,
        variables: { date: moment(date).format("YYYY-MM-DD") }
    })

    appointmentsPerDate = appointmentsPerDate.filter(
        item => item.id !== deleteAppointment.id
    )

    cache.writeQuery({
        query: GET_APPOINTMENTS,
        variables: { date: moment(date).format("YYYY-MM-DD") },
        data: {
            appointmentsPerDate
        }
    })
}
