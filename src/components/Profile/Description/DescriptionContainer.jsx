import Description from './Description';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		wallpaper: state.profilePage.profileData.wallpaper,
		name: state.profilePage.profileData.name,
		birth: state.profilePage.profileData.birth,
		city: state.profilePage.profileData.city,
		education: state.profilePage.profileData.education,
		site: state.profilePage.profileData.site,
		avatar: state.profilePage.profileData.avatar
	}
}
let mapDispatchToProps = (dispatch) => ({})

const DescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Description)



export default DescriptionContainer;