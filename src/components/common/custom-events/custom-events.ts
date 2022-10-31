let doubleClicked = false

export const onDoubleClick = (func: (isScale: boolean) => void, isScale: boolean) => {
    if (doubleClicked) {
        func(isScale)
    }
    doubleClicked = true
    setTimeout(() => {
        doubleClicked = false
    }, 300)
}	