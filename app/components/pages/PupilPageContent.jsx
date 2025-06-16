"use client"
import { useState, useEffect } from 'react'
import Heading from '../Heading'
import ManageGrade from '../pupil/ManageGrade'
import Comment from '../pupil/Comment'
import styles from "@/app/css/pages/_pupilPageContent.module.scss"
const PupilPageContent = ({ pupil, pupilGrades, subjects, subSubjects, competencies }) => {

  const [reload, setReload] = useState(false)
  const [data, setData] = useState(pupilGrades)
  const grades = ["A", "VA", "NA"]

  const manageGrade = async (grade, competency, currentGrade) => {
    let payload = {
      pupil_id: pupil.id,
      subject_id: competency.subject_id,
      subsubject_id: competency.subsubject_id,
      subject_id: competency.subject_id,
      competency_id: competency.id,
      grade: grade,
    }
    if (!currentGrade) {
      try {
        const res = await fetch(`http://localhost:3000/api/grades`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          console.error("Erreur réseau", res.status);
          return;
        }
        await res.json()
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    } else {
      payload.important = currentGrade.important;
      payload.comment = currentGrade.comment;
      try {
        const res = await fetch(`http://localhost:3000/api/grades/${currentGrade.id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          console.error("Erreur réseau", res.status);
          return;
        }
        await res.json()
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    }
    setReload(true)
  }
  const handleClick = (grade, competency, currentGrade) => {
    manageGrade(grade, competency, currentGrade)
  }
  const findGrade = (competencyId) => {
    return data.find((grade) => grade.competencyId === competencyId)
  }
  const getPupilGrades = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/grades/pupil/${id}`);
      if (!res.ok) {
        console.error("Erreur réseau", res.status);
        return;
      }
      const data = await res.json();
      setData(data)
      return data;
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  }

  console.log(pupil);
  
  useEffect(() => {
    if (reload === true) {
      getPupilGrades(pupil.id)
    }
    setReload(false)
  }, [reload])

  return (
    <section className={styles.pupilPageContent}>
      <Heading title={`${pupil.first_name} ${pupil.last_name} - ${pupil.school_grade_name}`} />
      <div className={styles.pupilContainer}>
        {subjects?.map((subject, index) => {
          return (
            <div className={styles.subjectContainer} key={subject.id}>
              <h2 className={styles.subjectName}>{subject.name}</h2>
              <div className={styles.subSubjectsContainer}>
                {subSubjects?.map((subSubject, index) => {
                  if (subSubject.subject_id === subject.id && subSubject.school_grade_id === pupil.school_grade_id) {
                    return (
                      <div key={index} className={styles.subSubject}>
                        <div className={styles.subSubjectContainer}>
                          <div className={styles.subSubjectName}>
                            {subSubject.name}
                          </div>
                          <div className={styles.competencies}>
                            {competencies?.map((competency, index) => {
                              if (competency.subsubject_id === subSubject.id) {
                                const currentGrade = findGrade(competency.id)
                                return (
                                  <div className={styles.competency} key={index}>
                                    <h3 className={styles.competencyName}>{competency.name}</h3>
                                    <div className={styles.manageGrade}>
                                      {grades?.map((grade, index) => {
                                        return (
                                          <ManageGrade currentGrade={currentGrade?.grade ?? ""} key={index} type={grade} handleClick={() => handleClick(grade, competency, currentGrade)} />
                                        )
                                      })}
                                    </div>
                                    {currentGrade && <Comment
                                      setReload={setReload}
                                      currentGrade={currentGrade}
                                    />}
                                  </div>
                                )
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PupilPageContent