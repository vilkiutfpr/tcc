import gql from "graphql-tag"

export const GET_APPOINTMENT_SUMMARY = gql`
    query AppointmentSummary {
        getAppointmentSummary {
            billed
            total
        }
    }
`
