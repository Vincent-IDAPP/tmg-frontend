import styles from "@/app/css/components/_heading.module.scss"
const Heading = ({ title, description, ...props }) => {
    return (
        <div className={styles.heading} style={{
            textAlign:props.textAlign ?? ""
        }}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default Heading