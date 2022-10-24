import React, { useState, useEffect } from 'react'
import classes from './Description.module.css'
import loader from '../../../assets/icons/loading.gif'
import { onDoubleClick } from '../../common/custom-events/custom-events'


const DescriptionText = ({ userId, type, text, ...props }) => {
	const [editMode, toggleEditMode] = useState(false)
	const [data, setData] = useState(props.data)
	const [isFetching, toggleIsFetching] = useState(false)
	useEffect(() => {
		toggleIsFetching(false)
		setData(props.data)
	}, [props.data])

	const onChangeData = (e) => setData(e.currentTarget.value)
	const activateEditMode = () => onDoubleClick(toggleEditMode, true)
	const deactivateEditMode = () => {
		toggleEditMode(false)
		if (props.data !== data) {
			toggleIsFetching(true)
			props.updateProfile(data.trim(), type, userId)
		}
	}

	return (
		editMode
			? < div className={`${classes.description__text} ${classes.description__text_edit_mode}`} >
				<span className={classes.text}>{text}</span>
				&nbsp;
				<input onChange={onChangeData} onBlur={deactivateEditMode} autoFocus type="text" value={data} meta-width={data.length} />
			</div>
			: <div className={classes.description__text} >
				{isFetching ? <span className={classes.isFetchingBlock} /> : ''}
				<span className={classes.text}>{text}</span>
				&nbsp;
				<span className={props.isMineProfile ? classes.editable : ''}
					onClick={props.isMineProfile ? activateEditMode : null}>
					{data}
				</span>
				<img src={loader} alt="load" /> {/*Так-то тут display: none потому что react умеет делать только динамический import*/}
			</ div>
	)
}

export default DescriptionText;


