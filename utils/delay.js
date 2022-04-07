export default (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    }, duration)
}
