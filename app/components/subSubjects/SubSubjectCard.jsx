import React from 'react'
import styles from "@/app/css/components/subjects/_subSubjectCard.module.scss"
import Button from '../Button'
import Input from '../Input'
import InputField from '../global/InputField'
import { useState, useEffect } from 'react'
import Loader from '../Loader'
const SubSubjectCard = ({ subject,
    subSubjects,
    setReload,
    setOpenModal,
    setModalContent,
    setSubSubjectId,
    schoolGrade,
}) => {
    
    const [formData, setFormData] = useState({
        name: '',
        subject_id: subject.id,
        school_grade_name: schoolGrade.name,
        school_grade_id: schoolGrade.id
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (formData.name && formData.subject_id) {
            setReload(true)
            setIsLoading(true)
            console.log(formData);
            
            try {
                const res = await fetch(`http://localhost:3000/api/sub-subjects`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (!res.ok) {
                    console.error("Erreur réseau", res.status);
                    return;
                }
                setFormData({
                    name: '',
                    subject_id: subject.id
                })
                await res.json()
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
            }
            setIsLoading(false)
        }
    }

    const handleDelete = (id) => {
        setOpenModal(true);
        setModalContent("delete");
        setSubSubjectId(id)
    }

    /* const findSchoolGrade = () => {
        console.log(id);
        schoolGrades.map((grade) => console.log(grade.id));
        return schoolGrades.find((grade) => grade.name == schoolGrade);
    } */

    /*     console.log(schoolGradeName);
        console.log(subSubjects); */

    return (
        <div key={subject.id} className={styles.subSubjectCard}>
            <h2 className={styles.subjectName}>{subject?.name}</h2>
            <div className={styles.subSubjectContainer}>
                {subSubjects?.map((subSubject, index) => {
                    if (subSubject.subject_id === subject.id && subSubject.school_grade_name == schoolGrade.name) {
                        return (
                            <div className={styles.manage} key={index}>
                                <h3 className={styles.subSubjectName}>{subSubject?.name}</h3>
                                <Button
                                    text={"Supprimer"}
                                    style={"red"}
                                    onClick={() => handleDelete(subSubject.id)}
                                />
                            </div>
                        )
                    }
                })}
            </div>
            {isLoading
                ? <Loader />
                : <InputField
                    flexDirection="row"
                    margin={"40px 0 0 0"}
                >
                    <Input
                        name={"name"}
                        value={formData.name}
                        type={"text"}
                        placeholder={"Saisir le nom de la matière..."}
                        onChange={handleChange}
                    />
                    <Button
                        text={"+"}
                        style={"green"}
                        borderRadius={"0 5px 5px 0"}
                        onClick={handleSubmit}
                    />
                </InputField>
            }

        </div>
    )
}

export default SubSubjectCard