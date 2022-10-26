import React from "react"
import { createPortal } from "react-dom"
import classes from './Modal.module.css'



const Modal = ({ children, isModalOpen, setOpenModal }) => {
	return isModalOpen
		&& createPortal(
			<div className={classes.modal} onClick={e => setOpenModal(false)}>
				<div className={classes.container} onClick={e => e.stopPropagation()}>
					{children}
				</div>
			</div>
			, document.body)
}

export default Modal