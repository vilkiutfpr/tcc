import React, { useCallback } from "react"
import { GET_NOTICES } from "GraphQL/Notices/Queries/notices"
import { useQuery } from "@apollo/react-hooks"
import { CBMList } from "@cbmsc/components/dist/Components/Atoms/List"
import { CBMStatusListItem } from "@cbmsc/components/dist/Components/Atoms/StatusListItem"
import { configureColorFromPriority } from "@cbmsc/utils/dist/ColorFromPriority"

const ScgNoticesList = ({ onClick }) => {
    const { data, loading } = useQuery(GET_NOTICES, {
        variables: { where: {} }
    })

    const configureColor = useCallback(
        priority => configureColorFromPriority(priority),
        []
    )

    return (
        <CBMList
            loading={loading}
            dataSource={data && data.notices}
            renderItem={item => (
                <CBMStatusListItem
                    onClick={() => onClick(item)}
                    title={item.title}
                    subtitle={item.description}
                    status={configureColor(item.priority)}
                />
            )}
        />
    )
}

export default ScgNoticesList
