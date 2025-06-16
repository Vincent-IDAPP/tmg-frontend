import React from 'react'
import styles from "@/app/css/components/_modal.module.scss"
const Modal = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Modal