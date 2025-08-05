import React from 'react'
import { useState, useEffect } from 'react'
import Input from '../Input'
import Button from '../Button'
import InputField from '../global/InputField'
import Loader from '../Loader'
const AddCompetency = ({ subjectId, subSubjectId, setReload, schoolGrade }) => {


    const [formData, setFormData] = useState({
        name: '',
        subject_id: subjectId,
        subsubject_id: subSubjectId,
        schoolGrade: schoolGrade.id
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (formData.name && formData.subsubject_id) {
            setReload(true)
            setIsLoading(true)
            try {
                const res = await fetch(`http://localhost:3000/api/competencies`, {
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
                    subject_id: subjectId,
                    subsubject_id: subSubjectId,
                    schoolGrade: schoolGrade.id

                })
                await res.json()
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
            }
            setIsLoading(false)
        }
    }
    return (
        <>
            {isLoading ? <Loader />
                :
                <InputField
                    flexDirection="row"
                    margin={"0"}
                >
                    <Input
                        name={`name`}
                        value={formData.name}
                        type={"text"}
                        placeholder={"Saisir le nom de la compétence..."}
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
        </>

    )
}

export default AddCompetency