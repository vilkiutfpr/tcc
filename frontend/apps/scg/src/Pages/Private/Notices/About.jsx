import React, { useCallback } from "react"
import { CBMTypography } from "@cbmsc/components/dist/Components/Atoms/Typography"
import { CBMBox } from "@cbmsc/components/dist/Components/Atoms/Box"
import { CBMBadge } from "@cbmsc/components/dist/Components/Atoms/Badge"

import { configureNameFromPriority } from "@cbmsc/utils/dist/NameFromPriority"
import { configureColorFromPriority } from "@cbmsc/utils/dist/ColorFromPriority"

const ScgNoticesAbout = ({ item }) => {
    const configureName = useCallback(
        priority => configureNameFromPriority(priority),
        []
    )

    const configureColor = useCallback(
        priority => configureColorFromPriority(priority),
        []
    )

    return (
        <>
            <CBMTypography className='mb-sm' variant='body' strong>
                {item.title}
            </CBMTypography>
            <CBMTypography
                variant='caption'
                className='cbm-about-notification--description mb-md'
            >
                {item.description}
            </CBMTypography>
            <CBMBox className='d-flex flex-wrap align-items-center mb-lg'>
                <CBMBadge
                    className='mb-xs'
                    value={configureName(item.priority)}
                    color={configureColor(item.priority)}
                />
                {item.categories &&
                    item.categories.map((item, index) => (
                        <CBMBadge
                            key={index}
                            className='mb-xs'
                            value={item.name}
                            color='default'
                        />
                    ))}
            </CBMBox>
        </>
    )
}

export default ScgNoticesAbout
