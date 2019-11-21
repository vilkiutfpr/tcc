import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { CBMBadge } from "../../Atoms/Badge"
import { CBMTypography } from "../../Atoms/Typography"
import { CBMBox } from "../../Atoms/Box"
import { CBMRow, CBMCol } from "../../Atoms/Grid"
import { CBMList } from "../../Atoms/List"
import { CBMStatusListItem } from "../../Atoms/StatusListItem"

const CBMTasks = ({
    className,
    TodoListProps,
    DoneListProps,
    Actions,
    counters,
    children,
    ...props
}) => {
    const classes = classNames("cbm-tasks", className)
    const setItemStatus = list =>
        list.map(item => {
            return {
                ...item,
                status:
                    item.priority === "HIGH"
                        ? "danger"
                        : item.priority === "MEDIUM"
                        ? "warning"
                        : "success"
            }
        })

    return (
        <CBMBox className={classes} {...props}>
            <CBMRow
                gutter={8}
                className='mb-xl'
                type='flex'
                justify='space-between'
                align='middle'
            >
                <CBMCol xs={24} md={6} className='d-flex align-items-center'>
                    <CBMBadge
                        className='mr-lg'
                        color='danger'
                        rounded
                        value={counters.high}
                        label='Alta'
                        loading={TodoListProps.loading}
                    />
                    <CBMBadge
                        className='mr-lg'
                        color='warning'
                        rounded
                        value={counters.medium}
                        label='Média'
                        loading={TodoListProps.loading}
                    />
                    <CBMBadge
                        color='success'
                        rounded
                        value={counters.low}
                        label='Baixa'
                        loading={TodoListProps.loading}
                    />
                </CBMCol>
                <CBMCol xs={24} md={18} className='cbm-tasks__actions'>
                    {Actions}
                </CBMCol>
            </CBMRow>
            <CBMList
                className='mb-lg'
                dataSource={
                    TodoListProps.source && setItemStatus(TodoListProps.source)
                }
                loading={TodoListProps.loading}
                renderItem={item => (
                    <CBMStatusListItem
                        onClick={() => TodoListProps.openAbout(item)}
                        title={item.title}
                        subtitle={item.description}
                        status={item.status}
                    />
                )}
            />

            <CBMTypography
                className='cbm-tasks--done-title mt-xxl mb-xl'
                variant='subtitle'
            >
                Já realizadas
            </CBMTypography>

            <CBMList
                className='mb-lg'
                dataSource={
                    DoneListProps.source && setItemStatus(DoneListProps.source)
                }
                loading={DoneListProps.loading}
                renderItem={item => (
                    <CBMStatusListItem
                        onClick={() => DoneListProps.openAbout(item)}
                        title={item.title}
                        subtitle={item.description}
                        status='default'
                    />
                )}
            />
            {children}
        </CBMBox>
    )
}

CBMTasks.propTypes = {
    className: PropTypes.string,
    TodoListProps: PropTypes.shape({
        source: PropTypes.array,
        loading: PropTypes.bool,
        openAbout: PropTypes.func
    }),
    DoneListProps: PropTypes.shape({
        source: PropTypes.array,
        loading: PropTypes.bool,
        openAbout: PropTypes.func
    }),
    Actions: PropTypes.node,
    counters: PropTypes.shape({
        high: PropTypes.number,
        medium: PropTypes.number,
        low: PropTypes.number
    })
}
CBMTasks.defaultProps = {}

export default CBMTasks
