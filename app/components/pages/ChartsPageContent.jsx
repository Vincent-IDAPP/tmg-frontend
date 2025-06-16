"use client"
import React from 'react'
import Diagramme from '../Diagramme'
import Heading from '../Heading'
import styles from "@/app/css/pages/_chartsPageContent.module.scss"
const ChartsPageContent = ({ pupilGrades }) => {
  return (
  <section className={styles.subSubjectsPageContent}>
    <Heading title={`Diagramme de `} />
    <Diagramme pupilGrades={pupilGrades} />
  </section>
  )
}

export default ChartsPageContent