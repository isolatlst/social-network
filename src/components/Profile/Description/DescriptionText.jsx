import React from 'react'
import classes from './Description.module.css'
import loading from '../../../assets/icons/loading.gif'

class DescriptionText extends React.Component {
	state = {
		editMode: false,
		data: this.props.data,
		type: this.props.type,
		isFetching: false
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.data !== prevProps.data) {
			this.setState({ isFetching: false })
		}
	}
	onChangeData = (e) => { this.setState({ data: e.currentTarget.value }) }
	activateEditMode = () => { this.setState({ editMode: true }) }
	deactivateEditMode = () => {
		this.setState({
			isFetching: true,
			editMode: false,
			data: this.state.data
		})
		this.props.updateProfile(this.state.data, this.state.type)
	}


	render() {
		return (
			this.state.editMode
				? < div className={`${classes.description__text} ${classes.description__text_edit_mode}`} >
					{this.props.text}&nbsp;
					<input onChange={this.onChangeData} onBlur={this.deactivateEditMode} autoFocus type="text" value={this.state.data} />
				</div>
				: < div className={classes.description__text} >
					{this.props.text}&nbsp;
					<span onDoubleClick={this.props.isMineProfile ? this.activateEditMode : null}>{this.props.data}
						{this.state.isFetching ? <img src={loading} alt='...loading' /> : ''}
					</span>
				</ div>
		)
	}
}

export default DescriptionText;


