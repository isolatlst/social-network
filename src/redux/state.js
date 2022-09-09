//Profile const
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

//Messages const
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
	_state: {
		profilePage: {
			profileData: {
				name: 'Kirill Gurin',
				birth: '29.12.2001',
				city: 'Minsk',
				education: 'BSUIR',
				site: "github.com/isolatlst",
				avatar: 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500',
				wallpaper: 'https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg',
				postsData: [
					{ id: 1, post: 'I try to learning react' },
					{ id: 2, post: 'Hello! Its my social network' },
				],
				newPostText: ''
			}
		},
		messagesPage: {
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
	},
	setState(data) {
		this._state.push(data)
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log('no observers')
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},


	dispatch(action) {
		switch (action.type) {
			case ADD_POST: {
				let newPost = {
					id: this._state.profilePage.profileData.postsData.length + 1,
					post: this._state.profilePage.profileData.newPostText
				}
				if (this._state.profilePage.profileData.newPostText) {
					this._state.profilePage.profileData.postsData.push(newPost)
				}
			}

			case UPDATE_NEW_POST_TEXT: {
				this._state.profilePage.profileData.newPostText = action.postText
			}

			case SEND_MESSAGE: {
				let newMessage = {
					id: this._state.messagesPage.messagesData.length + 1,
					date: '',
					sender: '',
					message: this._state.messagesPage.newMessageData
				}
				if (this._state.messagesPage.newMessageData) {
					this._state.messagesPage.messagesData.push(newMessage)
				}
			}

			case UPDATE_NEW_MESSAGE_TEXT: {
				this._state.messagesPage.newMessageData = action.messageText
			}

			default:
				this._callSubscriber(this._state)
				break
		}
	}
}

//Profile export Action Creator
export const addPostACreator = (text) => ({ type: ADD_POST, postText: text })
export const updateNewPostACreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, postText: text })

//Messages export Action Creator
export const sendNewMessageACreator = (text) => ({ type: SEND_MESSAGE, messageText: text })
export const updateNewMessageACreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: text })

window.store = store

export default store