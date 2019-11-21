import gql from "graphql-tag"

export const UPDATE_APPOINTMENT = gql`
    mutation UpdateAppointment(
        $data: AppointmentUpdateInput!
        $where: AppointmentWhereUniqueInput!
    ) {
        updateAppointment(data: $data, where: $where) {
            id
            start
            end
            billed
            user {
                id
                name
                email
            }
        }
    }
`
