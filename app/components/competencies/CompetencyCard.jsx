import React from 'react'
import styles from "@/app/css/components/competencies/_competencyCard.module.scss"
import Button from '../Button'
import Input from '../Input'
import InputField from '../global/InputField'
import { useState, useEffect } from 'react'
import Loader from '../Loader'
import AddCompetency from './AddCompetency'
const CompetencyCard = ({
    competencies,
    subject,
    subSubjects,
    setReload,
    setOpenModal,
    setModalContent,
    setCompetencyId,
    schoolGrade
}) => {

    const handleDelete = (id) => {
        setOpenModal(true);
        setModalContent("delete");
        setCompetencyId(id)
    }


    console.log(competencies);
    

    return (
        <div key={subject.id} className={styles.competencyCard}>
            <h2 className={styles.subjectName}>{subject?.name}</h2>
            <div className={styles.subjectsContainer}>
                {subSubjects?.map((subSubject, index) => {
                    if (subSubject.subject_id === subject.id) {
                        return (
                            <div className={styles.subSubjectsContainer} key={index}>
                                <h3 className={styles.subSubjectName}>{subSubject?.name}</h3>
                                <div className={styles.competenciesContainer}>
                                    {competencies?.map((competency, index) => {
                                        if (competency.subsubject_id === subSubject.id) {
                                            return (
                                                <div key={index} className={styles.competencyContainer}>
                                                    <h4 className={styles.competencyName}>{competency.name}</h4>
                                                    <Button
                                                        style="red"
                                                        onClick={() => handleDelete(competency.id)}
                                                        text={"supprimer"}
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <AddCompetency
                                    subSubjectId={subSubject.id}
                                    subjectId={subject.id}
                                    setReload={setReload}
                                    schoolGrade={schoolGrade}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default CompetencyCard