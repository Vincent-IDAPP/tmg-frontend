"use client"
import { useState, useEffect } from 'react'
import Heading from '../Heading'
import styles from "@/app/css/pages/_subSubjectsPageContent.module.scss"
import Button from '../Button'
import Input from '../Input'
import SubSubjectCard from '../subSubjects/SubSubjectCard'
import Modal from '../Modal'
import SubSubjectsModalContent from '../subSubjects/SubSubjectsModalContent'
const SubSubjectsPageContent = ({ subjects, subSubjects, schoolGrade }) => {

  const [reload, setReload] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [subSubjectId, setSubSubjectId] = useState(null)
  const [data, setData] = useState(subSubjects)
  const fetchSubSubjects = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/sub-subjects`);
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
      fetchSubSubjects()
    }
    setReload(false)
  }, [reload])
  
  

  return (
    <>
      <section className={styles.subSubjectsPageContent}>
        <Heading title={`Liste des sous-matières`} />
        <div className={styles.subSubjectsContainer}>
          {subjects?.map((subject) => {
            return (
              <SubSubjectCard
                subject={subject}
                key={subject.id}
                subSubjects={data}
                setReload={setReload}
                setOpenModal={setOpenModal}
                setModalContent={setModalContent}
                setSubSubjectId={setSubSubjectId}
                schoolGrade={schoolGrade}
              />

            )
          })}

        </div>
      </section >
      {openModal && <Modal>
        <SubSubjectsModalContent
          subSubjectId={subSubjectId}
          setOpenModal={setOpenModal}
          modalContent={modalContent}
          setReload={setReload}
          schoolGrade={schoolGrade}
        />
      </Modal>}
    </>
  )
}

export default SubSubjectsPageContent