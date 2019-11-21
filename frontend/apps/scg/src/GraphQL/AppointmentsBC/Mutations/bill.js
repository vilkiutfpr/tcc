import gql from "graphql-tag"

export const BILL_APPOINTMENT = gql`
    mutation BillAppointment(
        $billed: Boolean!
        $where: AppointmentWhereUniqueInput!
    ) {
        billAppointment(billed: $billed, where: $where) {
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
