"use client"
import React from 'react'
import styles from "@/app/css/pages/_competenciesPageContent.module.scss"
import Heading from '../Heading'
import Modal from '../Modal'
import { useState, useEffect } from 'react'
import CompetencyCard from '../competencies/CompetencyCard'
import CompetencyModalContent from '../competencies/CompetencyModalContent'
const CompenteciesPageContent = ({
    subjects,
    subSubjects,
    competencies,
    schoolGrade
}) => {


    const [reload, setReload] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [subSubjectId, setSubSubjectId] = useState(null)
    const [competencyId, setCompetencyId] = useState(null)
    const [data, setData] = useState(competencies)

    const getCompetencies = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/competencies`);
            if (!res.ok) {
                console.error("Erreur réseau", res.status);
                return;
            }
            const data = await res.json();
            setData(data)
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    }
    useEffect(() => {
        if (reload === true) {
            getCompetencies()
        }
        setReload(false)
    }, [reload])
    return (
        <>
        <section className={styles.competenciesPageContent}>
            <Heading title={`Ajouter des compétences`} />
            <div className={styles.subjectsContainer}>
                {subjects?.map((subject) => { 
                    return (
                        <CompetencyCard
                            competencies={data}
                            subject={subject}
                            key={subject.id}
                            subSubjects={subSubjects}
                            setReload={setReload}
                            setOpenModal={setOpenModal}
                            setModalContent={setModalContent}
                            setSubSubjectId={setSubSubjectId}
                            setCompetencyId={setCompetencyId}
                            schoolGrade={schoolGrade}
                        />

                    )
                })}
            </div>
        </section>
        {openModal && <Modal>
                <CompetencyModalContent
                  subSubjectId={subSubjectId}
                  competencyId={competencyId}
                  setOpenModal={setOpenModal}
                  modalContent={modalContent}
                  setReload={setReload}
                />
              </Modal>}
        </>
    )
}

export default CompenteciesPageContent