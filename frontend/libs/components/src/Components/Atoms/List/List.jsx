import React from "react"
import classNames from "classnames"

import { List, Skeleton } from "antd"

import noData from "../../../Assets/no-data.svg"
import { CBMBox } from "../Box"
import { CBMTypography } from "../Typography"
import { CBMSkeleton } from "../Skeleton"
import CBMListItem from "./ListItem"

const NoData = () => (
    <CBMBox>
        <img src={noData} alt='No-data' className='mb-lg' />
        <CBMTypography component='h3'>
            Não foram encontrados registros!
        </CBMTypography>
    </CBMBox>
)

const Loading = () => (
    <>
        <CBMListItem className='cbm-list__loading--item'>
            <CBMSkeleton title paragraph={{ rows: 1 }} active loading />
        </CBMListItem>
        <CBMListItem className='cbm-list__loading--item'>
            <CBMSkeleton title paragraph={{ rows: 1 }} active loading />
        </CBMListItem>
        <CBMListItem className='cbm-list__loading--item'>
            <CBMSkeleton title paragraph={{ rows: 1 }} active loading />
        </CBMListItem>
    </>
)

const CMBList = ({ className, dataSource, loading, ...props }) => {
    const classes = classNames("cbm-list", className, {
        "cbm-list__no-data": !dataSource || !dataSource.length,
        "cbm-list__loading": loading
    })

    return (
        <List
            locale={{ emptyText: !loading ? <NoData /> : <span /> }}
            loading={loading && { indicator: <Loading /> }}
            className={classes}
            dataSource={dataSource}
            {...props}
        />
    )
}

CMBList.propTypes = List["propTypes"]

export default CMBList
