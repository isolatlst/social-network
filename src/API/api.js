import axios from 'axios'

const _getConfig = (method, url, data = null) => ({
	method,
	url,
	xhrFields: {
		withCredentials: true
	},
	data
})

export const usersAPI = {
	async getUsersAPI(incData) {
		let { data } = await axios(
			_getConfig(
				'get',
				`/users/?p=${incData.totalPage}&count=${incData.pageSize}`,
			)
		)
		return data
	}
}
export const followAPI = {
	async toggleFollowAPI(isFollowed, userId) {
		let { data } = await axios(
			_getConfig(
				isFollowed ? 'delete' : 'post',
				`/follow/${userId}`,
			)
		)
		return data
	}
}
export const authAPI = {
	async loginAPI(incData) {
		let { data } = await axios(
			_getConfig(
				'post',
				`/login`,
				incData
			)
		)
		return data
	},
	async registerAPI(incData) {
		let { data } = await axios(
			_getConfig(
				'post',
				`/register`,
				incData
			)
		)
		return data
	},
	async logoutAPI() {
		let { data } = await axios(
			_getConfig(
				'delete',
				`/logout`
			)
		)
		return data
	}
}
export const profileAPI = {
	async getProfileAPI(userId) {
		let { data } = await axios(
			_getConfig(
				'get',
				`/profile/${userId}`,
			)
		)
		return data
	},
	async updateProfileAPI(incData, type, userId) {
		let { data } = await axios(
			_getConfig(
				'put',
				`/profile`,
				{ data: incData, type, userId }
			)
		)
		return data
	},
	async deletePostAPI(postId, profileId) {
		let { data } = await axios(
			_getConfig(
				'delete',
				`/profile/delete-post`,
				{ postId, profileId }
			)
		)
		return data
	}
}