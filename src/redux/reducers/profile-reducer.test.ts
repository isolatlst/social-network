import {profileACs} from '../actionCreators/profile-action-creator';
import profileReducer from './profile-reducer'

let initialState = {
    userId: 0,
    email: '',
    firstName: '',
    lastName: '',
    birth: '',
    location: '',
    education: '',
    site: '',
    avatar: '',
    wallpaper: '',
    followed: [],
    postsData: [
        {id: 1, post: 'test 1'}
    ],
    isFetching: false,
}


test('reducer delete post', () => {
    //1. Start test data
    let action = profileACs.deletePost(2, true)
    let initialStateCopy = {...initialState}
    initialStateCopy.postsData.push({id: 2, post: 'test 3'})
    //2. action
    let newState = profileReducer(initialStateCopy, action)
    //3. Expectation (only one)
    expect(newState.postsData.length).toBe(1)
});