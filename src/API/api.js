import axios from 'axios'


// const axiosInstance = axios.create({
// 	withCredentials: true,
// })

export const usersAPI = {
	_getConfig(totalPage, pageSize) {
		return {
			method: 'get',
			url: `/users/?p=${totalPage}&count=${pageSize}`,
			xhrFields: {
				withCredentials: true
			}
		}
	},
	async getUsersAPI(data) {
		let response = await axios(this._getConfig(data.totalPage, data.pageSize))
		return response.data
	}
}
export const followAPI = {
	_getConfig(method, userId) {
		return {
			method,
			url: `/follow/${userId}`,
			xhrFields: {
				withCredentials: true
			}
		}
	},
	async toggleFollowAPI(method, userId) {
		let response = await axios(this._getConfig(method, userId))
		return response.data
	}
}
export const authAPI = {
	_getConfig(url, data, method) {
		return {
			method,
			url,
			xhrFields: {
				withCredentials: true
			},
			data
		}
	},
	async loginAPI(data) {
		let response = await axios(this._getConfig('/login', data, 'post'))
		return response.data
	},
	async registerAPI(data) {
		let response = await axios(this._getConfig('/register', data, 'post'))
		return response.data
	},
	async logoutAPI() {
		let response = await axios(this._getConfig('/logout', '', 'delete'))
		return response.data
	}
}
export const profileAPI = {
	_getConfig(userId) {
		return {
			method: 'get',
			url: `/profile/${userId}`,
			xhrFields: {
				withCredentials: true
			}
		}
	},
	async getProfileAPI(userId) {
		let response = await axios(this._getConfig(userId))
		return response.data
	}
}