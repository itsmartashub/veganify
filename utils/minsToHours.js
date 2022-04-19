export default (mins) => {
    let h = Math.floor(+mins / 60)
    let m = Math.round(+mins % 60)

    return mins > 60
        ? `${h}<span>h</span> ${m}<span>m</span>`
        : `${mins} <span>min</span>`
}
