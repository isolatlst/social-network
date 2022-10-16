import classes from './FormControls.module.css'

export const Input = ({ input, meta, text, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={`${classes.group}  ${hasError ? classes.invalidGroup : (meta.touched ? classes.validGroup : '')}`}>
			<input className={classes.input} {...input} {...props} />
			<span className={classes.bar}></span>
			<label className={classes.label}>{meta.active ? `Enter your ${text}` : hasError ? `${text} ${meta.error}` : text}</label>
		</div>
	)
}


export const Textarea = ({ input, meta, maxLength, ...props }) => {
	return (
		<>
			<span className={classes.textSize}>{`${input.value.length}/${maxLength}`}</span>
			<textarea {...input} {...props} ></textarea>
		</>
	)
}