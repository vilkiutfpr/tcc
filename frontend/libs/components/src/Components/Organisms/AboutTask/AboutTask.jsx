import React, { useCallback } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { CBMDrawer } from "../../Atoms/Drawer"
import { CBMTypography } from "../../Atoms/Typography"
import { CBMBox } from "../../Atoms/Box"
import { CBMBadge } from "../../Atoms/Badge"
import { CBMIcon } from "../../Atoms/Icon"
import { CBMSwitch } from "../../Atoms/Switch"
import { CBMButton } from "../../Atoms/Button"
import { format } from "date-fns/esm"
import moment from "moment"

const CBMAboutTask = ({ className, task, onComplete, loading, ...props }) => {
    const classes = classNames("cbm-about-task", className)

    const configureName = useCallback(
        status =>
            status === "danger"
                ? "Alta"
                : status === "warning"
                ? "Média"
                : "Baixa",
        [task]
    )

    return (
        <CBMDrawer
            dynamicPlacement
            scrollable
            width='35vw'
            className={classes}
            {...props}
        >
            <CBMTypography
                className='mb-md'
                children={task.title}
                variant='subtitle'
                strong
            />
            <CBMTypography
                className='mb-lg'
                children={task.description}
                variant='body'
            />
            <CBMBox className='d-flex flex-wrap align-items-center mb-lg'>
                <CBMBadge
                    className='mb-xs'
                    value={configureName(task.status)}
                    color={task.status}
                />
                {task.categories &&
                    task.categories.map((item, index) => (
                        <CBMBadge
                            key={index}
                            className='mb-xs'
                            value={item.name}
                            color='default'
                        />
                    ))}
            </CBMBox>
            <CBMBox className='d-flex align-items-center cbm-about-task--location mb-md'>
                <CBMIcon className='mr-sm' type='environment' />
                <CBMTypography variant='body' children={task.address} />
            </CBMBox>
            <CBMBox className='d-flex cbm-about-task--time mb-xl'>
                <CBMBox className='d-flex align-items-center mr-lg'>
                    <CBMIcon className='mr-sm' type='calendar' />
                    <CBMTypography
                        variant='body'
                        children={moment(task.date).format("DD/MM/YYYY HH:mm")}
                    />
                </CBMBox>
            </CBMBox>
            <CBMBox className='d-flex align-items-center mb-xl'>
                <CBMSwitch
                    onChange={() => onComplete(task)}
                    checked={task.done}
                    loading={loading}
                    className='mr-sm'
                />
                <CBMTypography variant='body' children='Tarefa concluída' />
            </CBMBox>
            {task.document && (
                <CBMButton
                    href={task.document}
                    type='primary'
                    ghost
                    target='_blank'
                    icon='cloud-download'
                >
                    Ofício para realização da tarefa
                </CBMButton>
            )}
        </CBMDrawer>
    )
}

CBMAboutTask.propTypes = {
    className: PropTypes.string,
    onComplete: PropTypes.func,
    loading: PropTypes.bool
}
CBMAboutTask.defaultProps = {}

export default CBMAboutTask
