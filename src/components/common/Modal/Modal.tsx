import React from "react"
import {createPortal} from "react-dom"
import classes from './Modal.module.css'

type UseStateType = {
    isModalOpen: boolean
    setOpenModal: (isModalOpen: boolean) => void
    children: React.ReactNode
}
type ModalType = (params: UseStateType) => React.ReactPortal | null

const Modal: ModalType = ({children, isModalOpen, setOpenModal}) => {
    return isModalOpen
        ? createPortal(
            <div className={classes.modal} onClick={() => setOpenModal(false)}>
                <div className={classes.container} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
            , document.body)
        : null
}

export default Modal