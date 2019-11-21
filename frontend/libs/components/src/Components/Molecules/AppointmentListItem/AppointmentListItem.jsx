import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { CBMNavListItem } from "../../Atoms/NavListItem"
import CBMIcon from "../../Atoms/Icon/Icon"
import CBMTypography from "../../Atoms/Typography/Typography"
import { CBMBox } from "../../Atoms/Box"

const CBMAppointmentListItem = ({
    className,
    status,
    date,
    startTime,
    endTime,
    responsible,
    ...props
}) => {
    const classes = classNames("cbm-appointment-list-item", className, {})

    const iconClasses = classNames("cbm-appointment-list-item--icon", {
        [`cbm-appointment-list-item--icon--${status}`]: status
    })
    return (
        <CBMNavListItem className={classes} {...props}>
            <CBMIcon className={iconClasses} size='large' type='calendar' />
            <CBMBox className='cbm-appointment-list-item--content'>
                <CBMTypography variant='body'>{date}</CBMTypography>
                <CBMBox>
                    <span className='cbm-appointment-list-item--content__start-at mr-md'>
                        <CBMTypography
                            component='span'
                            variant='sub-caption'
                            strong
                            className='mr-xxs'
                        >
                            Começa:
                        </CBMTypography>
                        <CBMTypography component='span' variant='sub-caption'>
                            {startTime}
                        </CBMTypography>
                    </span>
                    <span className='cbm-appointment-list-item--content__end-at'>
                        <CBMTypography
                            component='span'
                            variant='sub-caption'
                            strong
                            className='mr-xxs'
                        >
                            Termina:
                        </CBMTypography>
                        <CBMTypography component='span' variant='sub-caption'>
                            {endTime}
                        </CBMTypography>
                    </span>
                </CBMBox>
                <CBMTypography
                    className='cbm-appointment-list-item--recursive'
                    component='span'
                    variant='sub-caption'
                >
                    <CBMIcon type='user' className='mr-xs' />

                    {responsible}
                </CBMTypography>
            </CBMBox>
        </CBMNavListItem>
    )
}

CBMAppointmentListItem.propTypes = {
    className: PropTypes.string,
    status: PropTypes.oneOf(["success", "danger"]),
    date: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    recursive: PropTypes.bool
}
CBMAppointmentListItem.defaultProps = {}

export default CBMAppointmentListItem
