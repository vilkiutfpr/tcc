import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { CBMNavListItem } from '../NavListItem'
import CBMTypography from '../Typography/Typography'
import CBMIcon from '../Icon/Icon'
import {CBMBox} from '../Box';

const CBMNextAppointmentListItem = ({
    className,
    date,
    startTime,
    endTime,
    ...props
}) => {
    const classes = classNames('cbm-next-appointment-list-item', className)
    return (
        <CBMNavListItem className={classes} {...props}>
            <CBMTypography
                className='cbm-next-appointment-list-item--date'
                variant='body'
                strong
            >
                {date}
            </CBMTypography>
            <CBMBox>
                <CBMTypography
                    component='span'
                    variant='sub-caption'
                    className='mr-xxl'
                    type='success'
                >
                    <CBMIcon type='clock-circle' className='mr-xxs' />
                    {startTime}
                </CBMTypography>
                <CBMTypography
                    component='span'
                    variant='sub-caption'
                    type='danger'
                >
                    <CBMIcon type='clock-circle' className='mr-xxs' />
                    {endTime}
                </CBMTypography>
            </CBMBox>
        </CBMNavListItem>
    )
}

CBMNextAppointmentListItem.propTypes = {
    className: PropTypes.string,
    date: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string
}
CBMNextAppointmentListItem.defaultProps = {}

export default CBMNextAppointmentListItem
