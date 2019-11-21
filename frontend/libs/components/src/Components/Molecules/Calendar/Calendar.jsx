import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "@cbmsc/utils/dist/Moment"

import CBMCalendarToolbar from "./Toolbar"
import { CBMBox } from "../../Atoms/Box"
import CBMIcon from "../../Atoms/Icon/Icon"

const CBMCalendar = ({
    className,
    date,
    onNavigate: onNavigateProp,
    loading,
    ...props
}) => {
    const classes = classNames("cbm-calendar", className)
    const [view, setView] = useState("day")

    const localizer = momentLocalizer(moment)

    const onNavigate = action => {
        switch (action) {
            case "back":
                onNavigateProp(moment(new Date(date)).subtract("day", 1))
                break
            case "next":
                onNavigateProp(moment(new Date(date)).add("day", 1))
                break
            default:
                onNavigateProp(moment(new Date()))
        }
    }

    return (
        <CBMBox className={classes}>
            {loading && (
                <>
                    <CBMBox className='cbm-calendar__loading'>
                        <CBMIcon type='loading' />
                    </CBMBox>
                </>
            )}
            <Calendar
                date={new Date(date)}
                components={{
                    toolbar: () => (
                        <CBMCalendarToolbar
                            view={view}
                            onSelectView={setView}
                            onNavigate={onNavigate}
                        />
                    )
                }}
                localizer={localizer}
                longPressThreshold={50}
                showMultiDayTimes
                className='cbm-calendar__component'
                onNavigate={console.log}
                onView={console.log}
                view={view}
                {...props}
            />
        </CBMBox>
    )
}

CBMCalendar.propTypes = {
    className: PropTypes.string
}
CBMCalendar.defaultProps = {}

export default CBMCalendar
