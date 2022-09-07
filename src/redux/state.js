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
				{ id: 1, date: '19:21 23/08/2022', sender: 'friend', message: 'Привет' },
				{ id: 2, date: '19:22 23/08/2022', sender: 'friend', message: 'Как дела' },
				{ id: 3, date: '19:22 23/08/2022', sender: 'friend', message: 'Проверка длинного сообщения на всякие глюки и тому подобное. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quos ipsam dignissimos, laudantium facilis minima, repudiandae quas consequatur atque unde, fugiat recusandae ea possimus cupiditate itaque consectetur earum neque? Vero.' },
				{ id: 4, date: '19:24 23/08/2022', sender: 'friend', message: 'У меня все хорошо' },
				{ id: 5, date: '19:28 23/08/2022', sender: 'me', message: 'Привет, у меня тоже' }
			]
		}
	},
	setState(data) {
		this._state.push(data)
	},
	getState() {
		return this._state
	},
	addPost() {
		let newPost = {
			id: this._state.profilePage.profileData.postsData.length + 1,
			post: this._state.profilePage.profileData.newPostText
		}
		this._state.profilePage.profileData.postsData.push(newPost)
		this._subscriber(this._state)
	},
	updateNewPostText(postText) {
		this._state.profilePage.profileData.newPostText = postText
		this._subscriber(this._state)
	},
	_subscriber() {
		console.log('no observers')
	},
	subscribe(observer) {
		this._subscriber = observer
	}
}


window.store = store


// export const addPost = () => {
// 	let newPost = {
// 		id: state.profilePage.profileData.postsData.length + 1,
// 		post: state.profilePage.profileData.newPostText
// 	}
// 	state.profilePage.profileData.postsData.push(newPost)
// 	state.profilePage.profileData.newPostText = ''
// 	renderEntireTree(state);
// }

// export const updateNewPostText = postText => {
// 	state.profilePage.profileData.newPostText = postText
// 	renderEntireTree(state);
// }

// export const subscribe = (observer) => {
// 	renderEntireTree = observer
// }


export default store
