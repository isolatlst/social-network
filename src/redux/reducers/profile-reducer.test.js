import { deletePost } from '../actionCreators/profile-action-creator';
import profileReducer from './profile-reducer'

let initialState = {
	name: '',
	birth: '',
	location: '',
	education: '',
	site: '',
	avatar: '',
	wallpaper: '',
	postsData: [],
	isFetching: false,
}


test('reducer delete post', () => {
	//1. Start test data
	let action = deletePost(2)
	let initialStateCopy = { ...initialState }
	initialState.postsData.push({ id: 1, post: 'test 1' })
	initialState.postsData.push({ id: 2, post: 'test 1' })
	//2. action
	let newState = profileReducer(initialStateCopy, action)
	//3. Expectation (only one)
	expect(newState.postsData.length).toBe(1)
});