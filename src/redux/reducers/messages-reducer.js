import { UPDATE_NEW_MESSAGE_TEXT, SEND_MESSAGE } from '../actions/messages-action'

let initialState = {
	dialogsData: [
		{ id: 1, name: 'Dennis', avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg' },
		{ id: 2, name: 'Vasya', avatar: 'https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg' },
		{ id: 3, name: 'Egor', avatar: 'https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg' },
		{ id: 4, name: 'Kirill', avatar: 'https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg' },
		{ id: 5, name: 'Vlad', avatar: 'https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg' }
	],
	messagesData: [
		{ id: 1, date: '', sender: '', message: 'Привет' },
		{ id: 2, date: '', sender: '', message: 'Как дела' },
		{ id: 3, date: '', sender: '', message: 'Проверка длинного сообщения на всякие глюки и тому подобное. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quos ipsam dignissimos, laudantium facilis minima, repudiandae quas consequatur atque unde, fugiat recusandae ea possimus cupiditate itaque consectetur earum neque? Vero.' },
		{ id: 4, date: '', sender: '', message: 'У меня все хорошо' },
		{ id: 5, date: '', sender: '', message: 'Привет, у меня тоже' }
	],
	newMessageData: ''
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let newMessage = {
				id: state.messagesData.length + 1,
				date: '',
				sender: '',
				message: state.newMessageData
			}
			if (state.newMessageData) {
				state.messagesData.push(newMessage)
				state.newMessageData = ''
			}
			return state
		}

		case UPDATE_NEW_MESSAGE_TEXT: {
			state.newMessageData = action.messageText
			return state
		}

		default: return state
	}
}

export default messagesReducer