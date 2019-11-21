import gql from "graphql-tag"

export const DELETE_APPOINTMENT = gql`
    mutation DeleteAppointment($where: AppointmentWhereUniqueInput!) {
        deleteAppointment(where: $where) {
            id
        }
    }
`
