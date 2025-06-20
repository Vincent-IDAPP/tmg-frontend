"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/css/components/global/_globalSelect.module.scss";
import Chevron from "@/public/icons/chevron.svg";
import Image from "next/image";
const GlobalSelect = ({
  options,
  onChange,
  placeholder = "Sélectionner une classe",
  defaultValue = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef(null);

  const handleToggle = () => setIsOpen(prev => !prev);

  const handleSelect = (target) => {
    setSelected(target);        // ✅ on garde l’objet complet
    onChange?.(target);         // ✅ on passe { id, value }
    setIsOpen(false);
  };
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.globalSelect} ref={ref}>
      <div
        onClick={handleToggle}
        className={`${styles.select} ${isOpen ? styles.open : ""}`}
      >
        <span className={styles.placeholder}>{selected ? selected.value : placeholder}</span>
        <Image src={Chevron} width={20} height={20} alt="chevron" className={`${isOpen ? styles.openChevron : ""} ${styles.chevron}`} />
      </div>

      <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleSelect(option)}
            className={styles.option}
          >
            {option.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalSelect;
