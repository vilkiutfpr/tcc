import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import CBMTasks from "./Tasks"
import { CBMLayoutStoriesExample } from "../../Organisms/Layout"
import CBMAboutTask from "../../Organisms/AboutTask/AboutTask"
import { CBMList } from "../../Atoms/List"
import { CBMStatusListItem } from "../../Atoms/StatusListItem"
import { CBMButton } from "../../Atoms/Button"
import { CBMDrawer } from "../../Atoms/Drawer"
import { CBMTaskForm } from "../../Organisms/TaskForm"

const todoList = [
    {
        title:
            "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
        description:
            "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
        status: "success",
        address: "Mussum Ipsum, cacilds vidis litro abertis.",
        date: "01/01/1990",
        time: "00:00",
        tags: [
            {
                title: "Mussum"
            },
            {
                title: "Ipsum"
            }
        ]
    },
    {
        title:
            "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
        description:
            "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
        status: "warning",
        address: "Mussum Ipsum, cacilds vidis litro abertis.",
        date: "01/01/1990",
        time: "00:00",
        tags: [
            {
                title: "Mussum"
            },
            {
                title: "Ipsum"
            }
        ]
    },
    {
        title:
            "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
        description:
            "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
        status: "danger",
        address: "Mussum Ipsum, cacilds vidis litro abertis.",
        date: "01/01/1990",
        time: "00:00",
        tags: [
            {
                title: "Mussum"
            },
            {
                title: "Ipsum"
            }
        ]
    }
]

const doneList = [
    {
        title:
            "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
        description:
            "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
        address: "Mussum Ipsum, cacilds vidis litro abertis.",
        date: "01/01/1990",
        time: "00:00",
        tags: [
            {
                title: "Mussum"
            },
            {
                title: "Ipsum"
            }
        ]
    },
    {
        title:
            "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
        description:
            "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
        address: "Mussum Ipsum, cacilds vidis litro abertis.",
        date: "01/01/1990",
        time: "00:00",
        tags: [
            {
                title: "Mussum"
            },
            {
                title: "Ipsum"
            }
        ]
    },
    {
        title:
            "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
        description:
            "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
        address: "Mussum Ipsum, cacilds vidis litro abertis.",
        date: "01/01/1990",
        time: "00:00",
        tags: [
            {
                title: "Mussum"
            },
            {
                title: "Ipsum"
            }
        ]
    }
]

const TasksBCExample = () => {
    const [visible, setVisible] = useState(false)
    const [item, setItem] = useState({})

    const openAboutModal = item => {
        setItem(item)
        setVisible(true)
    }

    const closeAboutModal = () => {
        setVisible(false)
        setItem({})
    }

    return (
        <CBMLayoutStoriesExample>
            <CBMTasks
                TodoListProps={{
                    source: todoList,
                    openAbout: openAboutModal
                }}
                DoneListProps={{
                    source: doneList,
                    openAbout: openAboutModal
                }}
                counters={{ high: 1, medium: 2, low: 1 }}
            />
            <CBMAboutTask
                visible={visible}
                closable={false}
                onClose={() => closeAboutModal()}
                onComplete={console.log}
                task={item}
                onClose={() => setVisible(old => !old)}
            />
        </CBMLayoutStoriesExample>
    )
}

const TasksADMExample = () => {
    const [visible, setVisible] = useState(false)
    const [openFormModal, setOpenFormModal] = useState(false)
    const [itemToEdit, setItemToEdit] = useState()
    const [item, setItem] = useState({})

    const openAboutModal = item => {
        setItem(item)
        setVisible(true)
    }

    const closeAboutModal = () => {
        setVisible(false)
        setItem({})
    }

    return (
        <CBMLayoutStoriesExample>
            <CBMTasks
                Actions={
                    <CBMButton
                        onClick={() => setOpenFormModal(true)}
                        type='primary'
                        ghost
                        icon='plus'
                    >
                        Nova tarefa
                    </CBMButton>
                }
                TodoListProps={{
                    source: todoList,
                    openAbout: openAboutModal
                }}
                DoneListProps={{
                    source: doneList,
                    openAbout: openAboutModal
                }}
                counters={{ high: 1, medium: 2, low: 1 }}
            />
            <CBMDrawer
                width={500}
                scrollable
                onClose={() => setOpenFormModal(false)}
                dynamicPlacement
                visible={openFormModal}
            >
                <CBMTaskForm defaultValues={itemToEdit} />
            </CBMDrawer>
            <CBMAboutTask
                visible={visible}
                closable={false}
                onClose={() => closeAboutModal()}
                onComplete={console.log}
                task={item}
                Actions={
                    <>
                        <CBMButton
                            className='mr-xs'
                            onClick={() => console.log}
                            icon='delete'
                            shape='round'
                            type='danger'
                            ghost
                        />
                        <CBMButton
                            onClick={() => {
                                setItemToEdit(item)
                                setOpenFormModal(true)
                            }}
                            icon='edit'
                            shape='round'
                            type='primary'
                            ghost
                        />
                    </>
                }
            />
        </CBMLayoutStoriesExample>
    )
}

storiesOf("Templates.Tasks", module)
    .add("BM", () => <TasksBCExample />, {
        style: {
            padding: 0
        }
    })
    .add("ADM", () => <TasksADMExample />, {
        style: {
            padding: 0
        }
    })
