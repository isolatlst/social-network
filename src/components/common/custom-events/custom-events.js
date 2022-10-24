let doubleClicked = false
// let touchedTime = 0

export const onDoubleClick = (func, args) => {
	// if (touchedTime === 0) {
	// 	touchedTime = Date.now()
	// } else {
	// 	if ((Date.now() - touchedTime) < 2500) {
	// 		func(args)
	// 		touchedTime = 0
	// 	} else {
	// 		touchedTime = Date.now()
	// 	}
	// }
	if (doubleClicked) {
		func(args)
	}
	doubleClicked = true
	setTimeout(() => {
		doubleClicked = false
	}, 300)
}	