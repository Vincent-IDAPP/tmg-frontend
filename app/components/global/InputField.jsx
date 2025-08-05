import React from "react";
import styles from "../../css/components/global/_inputField.module.scss"
const InputField = ({
  children,
  flexDirection = "column",
  name,
  ...props
}) => {
  return (
    <div
      className={styles.inputField}
      style={{ flexDirection: flexDirection, margin: props.margin ?? "0" }}
    >
      {children}
    </div>
  );
};

export default InputField;
