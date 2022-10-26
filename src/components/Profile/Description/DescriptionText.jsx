import classes from './Description.module.css'


const DescriptionText = ({ text, data }) => {
	return (
		<div className={classes.description__text} >
			<span className={classes.text}>{text}</span>
			&nbsp;
			<span>{data}</span>
		</ div>
	)
}

export default DescriptionText;


