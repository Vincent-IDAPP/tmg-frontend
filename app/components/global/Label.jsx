import React from "react";
import styles from "@/app/css/components/global/_label.module.scss";
const Label = ({ text, name }) => {
  return <label htmlFor={name} className={styles.label}>{text}</label>;
};

export default Label;
