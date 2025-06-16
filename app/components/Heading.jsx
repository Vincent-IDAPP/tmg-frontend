import styles from "@/app/css/components/_heading.module.scss"
const Heading = ({ title, description }) => {
    return (
        <div className={styles.heading}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default Heading