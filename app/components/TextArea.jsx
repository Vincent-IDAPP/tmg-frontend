import React from 'react'
import styles from '@/app/css/components/_textArea.module.scss'
const TextArea = ({handleChange, value, name}) => {
  return (
    <textarea
        className={styles.textArea}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder='Saisir le commentaire'
    >
    </textarea>
  )
}

export default TextArea