import React from 'react'
import styles from '@/app/css/components/_input.module.scss'
const Input = ({type, placeholder, name, required, disabled, onChange, id, value}) => {
  return (
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        disabled={disabled}
        onChange={onChange}
        id={id}
        value={value}
        className={styles.input}
    />
  )
}

export default Input