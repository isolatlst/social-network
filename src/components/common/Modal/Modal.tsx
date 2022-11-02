import React from "react"
import {createPortal} from "react-dom"
import classes from './Modal.module.css'

type PropsType = {
    isModalOpen: boolean
    closeModal: () => void
    children: React.ReactNode
}
type ModalType = (params: PropsType) => React.ReactPortal | null

const Modal: ModalType = ({children, isModalOpen, closeModal}) => {
    return isModalOpen
        ? createPortal(
            <div className={classes.modal} onClick={closeModal}>
                <div className={classes.container} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
            , document.body)
        : null
}

export default Modal