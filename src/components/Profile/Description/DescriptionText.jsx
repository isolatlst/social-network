import React from 'react'
import classes from './Description.module.css'
import { useState } from 'react'
import { useEffect } from 'react'



const DescriptionText = (props) => {
	const [editMode, toggleEditMode] = useState(false)
	const [data, setData] = useState(props.data)
	const [isFetching, toggleIsFetching] = useState(false)
	useEffect(() => {
		toggleIsFetching(false)
		setData(props.data)
	}, [props.data])

	const onChangeData = (e) => setData(e.currentTarget.value)
	const activateEditMode = () => toggleEditMode(true)
	const deactivateEditMode = () => {
		toggleEditMode(false)
		if (props.data !== data) {
			toggleIsFetching(true)
			props.updateProfile(data.trim(), props.type)
		}
	}

	return (
		editMode
			? < div className={`${classes.description__text} ${classes.description__text_edit_mode}`} >
				{props.text}
				&nbsp;
				<input onChange={onChangeData} onBlur={deactivateEditMode} autoFocus type="text" value={data} />
			</div>
			: < div className={classes.description__text} >
				{isFetching ? <span className={classes.isFetchingBlock} /> : ''}
				{props.text}
				&nbsp;
				<span onDoubleClick={props.isMineProfile ? activateEditMode : null}>
					{data}
				</span>
			</ div>
	)
}

export default DescriptionText;


