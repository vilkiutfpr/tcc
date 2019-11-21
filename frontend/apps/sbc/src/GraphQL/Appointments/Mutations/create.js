import gql from "graphql-tag"

export const CREATE_APPOINTMENT = gql`
    mutation CreateAppointment($data: AppointmentCreateInput!) {
        createAppointment(data: $data) {
            id
            start
            end
            user {
                id
                name
                email
            }
        }
    }
`
