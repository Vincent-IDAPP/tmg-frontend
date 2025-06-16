import React from 'react'
import styles from '@/app/css/pages/_schoolGradesPageContent.module.scss'
import Heading from '../Heading'
import Link from 'next/link'
const SchoolGradesPageContent = ({route}) => {
    return (
        <section className={styles.schoolGradesPageContent}>
            <Heading title={`Liste des compétences`} />
            <div className={styles.container}>
                <div className={styles.grades}>
                    <div className={`${styles.grade} ${styles.ce2}`}>
                        <Link className={styles.link} href={`/${route}/CE2`}>CE2</Link>
                    </div>
                    <div className={`${styles.grade} ${styles.cm1}`}>
                        <Link className={styles.link} href={`/${route}/CM1`}>CM1</Link>
                    </div>
                    <div className={`${styles.grade} ${styles.cm2}`}>
                        <Link className={styles.link} href={`/${route}/CM2`}>CM2</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SchoolGradesPageContent


