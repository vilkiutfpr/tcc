import React from "react"
import { CBMBox } from "@cbmsc/components/dist/Components/Atoms/Box"
import { CBMTypography } from "@cbmsc/components/dist/Components/Atoms/Typography"
import { CBMBadge } from "@cbmsc/components/dist/Components/Atoms/Badge"

const ScgUsersAbout = ({ item }) => {
    const setUserPatent = role =>
        role === "BM"
            ? "Bombeiro Militar"
            : role === "BC"
            ? "Bombeiro Voluntário"
            : "Administrador"

    return (
        <CBMBox>
            <CBMTypography className='mb-sm' variant='body' strong>
                {item.name}
            </CBMTypography>
            <CBMTypography
                variant='caption'
                className='cbm-about-notification--description mb-md'
            >
                {item.email}
            </CBMTypography>

            <CBMBadge className='mr-lg' color='danger' value={item.role} />
        </CBMBox>
    )
}

export default ScgUsersAbout
