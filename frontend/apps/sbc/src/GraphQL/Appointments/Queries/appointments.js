import gql from "graphql-tag"

export const GET_APPOINTMENTS = gql`
    query Appointments($where: AppointmentWhereInput!) {
        appointments(where: $where) {
            id
            start
            end
            user {
                id
                name
            }
        }
    }
`
