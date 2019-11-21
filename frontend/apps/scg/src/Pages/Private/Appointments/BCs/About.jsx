import React from "react"
import moment from "moment"

import { CBMTypography } from "@cbmsc/components/dist/Components/Atoms/Typography"
import { CBMIcon } from "@cbmsc/components/dist/Components/Atoms/Icon"
import { CBMListItemMeta } from "@cbmsc/components/dist/Components/Atoms/List"

const ScgBCAppointmentsAbout = ({ item }) => {
    return (
        <>
            <CBMListItemMeta
                className='mb-xl'
                title={item.user.name}
                description={item.user.email}
            />
            <CBMTypography component='span' className='mr-xl' strong>
                <CBMIcon className='mr-xs' type='play-circle' />
                {moment(item.start).format("DD/MM/YYYY HH:mm")}
            </CBMTypography>
            <CBMTypography component='span' strong>
                <CBMIcon className='mr-xs' type='pause-circle' />
                {moment(item.start).format("DD/MM/YYYY HH:mm")}
            </CBMTypography>
        </>
    )
}

export default ScgBCAppointmentsAbout
