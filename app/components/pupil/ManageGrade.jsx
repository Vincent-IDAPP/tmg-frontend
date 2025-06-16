import React from 'react'
import Image from 'next/image'
import styles from '@/app/css/components/pupil/_manageGrade.module.scss'
import Close from "@/public/icons/Close"
const ManageGrade = ({pupilId, competencyId, state = null, currentGrade, handleClick, type}) => {
    
  return (
    <div className={`${styles.manageGrade} ${styles[type]}`} onClick={() => handleClick()}>
        {currentGrade === type && <Close fill1={"white"} />}
    </div>
  )
}

export default ManageGrade