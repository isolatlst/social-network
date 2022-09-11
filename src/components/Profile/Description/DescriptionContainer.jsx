import Description from './Description';

function DescriptionContainer(props) {
	let state = props.store.getState().profilePage.profileData

	return (< Description
		wallpaper={state.wallpaper}
		name={state.name} birth={state.birth}
		city={state.city} education={state.education}
		site={state.site}
		avatar={state.avatar} />);
}

export default DescriptionContainer;