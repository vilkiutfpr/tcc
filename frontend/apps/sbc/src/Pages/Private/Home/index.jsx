import React from "react"
import { CBMCard } from "@cbmsc/components/dist/Components/Atoms/Card"
import { CBMRow, CBMCol } from "@cbmsc/components/dist/Components/Atoms/Grid"
import { Statistic, Icon } from "antd"
import { useQuery } from "@apollo/react-hooks"
import SbcSplashScreen from "Components/SplashScreen"
import { GET_APPOINTMENT_SUMMARY } from "GraphQL/Home/Queries/appointment-summary"

const SbcHome = () => {
    const { data, loading } = useQuery(GET_APPOINTMENT_SUMMARY)

    return loading ? (
        <SbcSplashScreen />
    ) : (
        <>
            <CBMRow gutter={16}>
                <CBMCol xs={24} md={12} className='mb-md'>
                    <CBMCard>
                        <Statistic
                            title='Horas contabilizadas'
                            value={data.getAppointmentSummary.billed}
                            valueStyle={{ color: "#488b49" }}
                            prefix={<Icon type='dollar' />}
                            suffix='h'
                        />
                    </CBMCard>
                </CBMCol>
                <CBMCol xs={24} md={12}>
                    <CBMCard>
                        <Statistic
                            title='Totais de horas trabalhadas'
                            value={data.getAppointmentSummary.total}
                            valueStyle={{ color: "#b60f2a" }}
                            prefix={<Icon type='clock-circle' />}
                            suffix='h'
                        />
                    </CBMCard>
                </CBMCol>
            </CBMRow>
        </>
    )
}

export default SbcHome
