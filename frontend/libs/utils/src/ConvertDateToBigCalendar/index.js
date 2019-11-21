export const convertDateToBigCalendar = date => {
    const formatedDate = date
        .replace(":", "-")
        .replace(" ", "-")
        .split("-")

    return new Date(
        formatedDate[0],
        formatedDate[1] - 1,
        formatedDate[2],
        formatedDate[3],
        formatedDate[4]
    )
}
