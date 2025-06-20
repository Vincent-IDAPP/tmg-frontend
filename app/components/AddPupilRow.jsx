"use client";

import React, { useState } from "react";
import styles from "../css/components/table/_addPupilRow.module.scss";
import GlobalSelect from "./global/GlobalSelect";
import Button from "./Button";

const AddPupilRow = ({ setReload }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    school_grade_id: null,
  });

  const schoolGrades = [
    { id: 1, value: "CE2" },
    { id: 2, value: "CM1" },
    { id: 3, value: "CM2" },
  ];

  const handleChange = (fieldOrEvent, value) => {
    if (typeof fieldOrEvent === "object" && fieldOrEvent.target) {
      const { name, value } = fieldOrEvent.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [fieldOrEvent]: value.id }));
    }
  };

  const addPupil = async () => {
    const isValid =
      formData.first_name && formData.last_name && formData.school_grade_id;
    if (isValid) {
      try {
        const res = await fetch("http://localhost:3000/api/pupils", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          console.error("Erreur réseau", res.status);
          return;
        }
        const data = await res.json();
        setReload(true)
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    }
  };

  return (
    <tr className={styles.addPupil}>
      <td className={styles.td}>
        <input
          type="text"
          placeholder="Saisir le prénom..."
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </td>
      <td className={styles.td}>
        <input
          type="text"
          placeholder="Saisir le nom..."
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </td>
      <td className={styles.td}>
        <GlobalSelect
          options={schoolGrades}
          onChange={(option) => handleChange("school_grade_id", option)}
        />
      </td>
      <td className={styles.td}>
        <Button text={"+ AJOUTER"} style={"green"} onClick={addPupil} />
      </td>
    </tr>
  );
};

export default AddPupilRow;
