import styles from "@/app/css/components/_inputField.module.scss"

const InputField = ({ children, ...props }) => {
    return (
        <div
            className={styles.inputField}
            style={{
                flexDirection: props.flexDirection ?? "column",
                margin: props.margin ?? "0"
            }}>
            {children}
        </div>
    )
}

export default InputField