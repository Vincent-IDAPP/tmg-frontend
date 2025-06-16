import React from 'react'
import Button from '../Button'
import TextArea from '../TextArea'
import styles from '@/app/css/components/pupil/_comment.module.scss'
import { useState } from 'react'
const Comment = ({ currentGrade, setReload }) => {

  const [formData, setFormData] = useState({
    comment: currentGrade.comment ?? ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const updateComment = async() => {
    try {
      const res = await fetch(`http://localhost:3000/api/grades/${currentGrade.id}/comment`, {
        method:"PATCH",
        headers:{
          "Content-type" : "Application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        console.error("Erreur réseau", res.status);
        return;
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
    setReload(true)
  }

  return (
    <div className={styles.comment}>
      <TextArea
        value={formData.comment}
        name={"comment"}
        handleChange={handleChange} />
      <Button
        text={"+"}
        style={"green"}
        borderRadius={"0 5px 5px 0"}
        onClick={updateComment}
      />
    </div>
  )
}

export default Comment