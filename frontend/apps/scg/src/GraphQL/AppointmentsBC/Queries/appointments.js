import gql from "graphql-tag"

export const GET_APPOINTMENTS = gql`
    query GetAppointments($date: Date!) {
        appointmentsPerDate(date: $date) {
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
