import React from 'react'
import classes from './Description.module.css'
import loading from '../../../assets/icons/loading.gif'
import { useState } from 'react'



const DescriptionText = (props) => {
	const [editMode, toggleEditMode] = useState(false)
	const [data, setData] = useState(props.data)
	const [isFetching, toggleIsFetching] = useState(false)

	const onChangeData = (e) => setData(e.currentTarget.value)
	const activateEditMode = () => toggleEditMode(true)
	const deactivateEditMode = async () => {
		toggleEditMode(false)
		toggleIsFetching(true)
		await props.updateProfile(data, props.type)
		toggleIsFetching(false)
	}

	return (
		editMode
			? < div className={`${classes.description__text} ${classes.description__text_edit_mode}`} >
				{props.text}&nbsp;
				<input onChange={onChangeData} onBlur={deactivateEditMode} autoFocus type="text" value={data} />
			</div>
			: < div className={classes.description__text} >
				{isFetching ? <img className={classes.isFetchingImage} src={loading} alt='...loading' /> : ''}
				{props.text}&nbsp;
				<span onDoubleClick={props.isMineProfile ? activateEditMode : null}>
					{props.data}
				</span>
			</ div>
	)
}

export default DescriptionText;


