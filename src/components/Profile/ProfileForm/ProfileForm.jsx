import { reduxForm } from 'redux-form';
import classes from './ProfileForm.module.css'
import Wallpaper from '../Description/Wallpaper/Wallpaper';
import { createField, Input } from '../../common/FormControls/FormControls';

function ProfileForm({ updateProfile, setEditMode, ...props }) {
	const updateProfileData = (formData) => {
		let data = {}
		for (let key in formData) {
			if (formData[key].trim() !== props[key]) {
				data[key] = formData[key].trim()
			}
		}
		if (Object.keys(data).length) updateProfile(data)
		setEditMode(false)
	}
	return (
		<main>
			<ProfileReduxForm {...props} initialValues={props} onSubmit={updateProfileData} setEditMode={setEditMode} />
		</main>
	)
}

function ProfileFormForRedux({ wallpaper, avatar, ...props }) {
	return (<form onSubmit={props.handleSubmit}>
		< Wallpaper wallpaper={wallpaper} />
		<div className={classes.description__body}>
			{createField(Input, [], '', 'avatar', 'text', 'Photo link')}
			{createField(Input, [], '', 'birth', 'text', 'Date of Birth')}
			{createField(Input, [], '', 'location', 'text', 'Location')}
			{createField(Input, [], '', 'education', 'text', 'Education')}
			{createField(Input, [], '', 'site', 'text', 'Web Site')}
			<div className={classes.buttons}>
				<button >Save changes</button>
				<button className={classes.exitBtn}
					onClick={e => { e.preventDefault(); props.setEditMode(false) }}>
					Exit
				</button>
			</div>
		</div>
	</form>)
}

const ProfileReduxForm = reduxForm({ form: 'updateProfile' })(ProfileFormForRedux);

export default ProfileForm