import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/css/components/_button.module.scss'
const Button = ({ hasImage = false, image, onClick, link, style, text, ...props }) => {

  return (
    <div
      className={`${styles.button} ${styles[style]}`}
      onClick={onClick}
      style={{
        borderRadius: props.borderRadius ?? "5px",
        margin: props.margin ?? "0"
      }}
    >
      {text}
    </div>
  )
}

export default Button