import React from 'react'
import SubSubjectsPageContent from '@/app/components/pages/SubSubjectsPageContent'



const SubSubjectsPage = async ({params}) => {

    const { name } = await params;
    
    const fetchSubjects = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/subjects`);
            if (!res.ok) {
                console.error("Erreur réseau", res.status);
                return;
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    }

    const fetchSubSubjects = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/sub-subjects`);
            if (!res.ok) {
                console.error("Erreur réseau", res.status);
                return;
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    }

     const fetchSchoolGrades = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/school-grades`);
          if (!res.ok) {
            console.error("Erreur réseau", res.status);
            return;
          }
          const data = await res.json();
          return data
          
        } catch (error) {
          console.error("Erreur lors de la requête :", error);
        }
      }

    const subjects = await fetchSubjects();
    const subSubjects = await fetchSubSubjects();
    const schoolGrades = await fetchSchoolGrades();


    const findSchoolGradeId = () => {
            return schoolGrades.find((grade) => (grade.name === name))
        }
    const schoolGrade = findSchoolGradeId();
    
    return (
        <SubSubjectsPageContent
            subjects={subjects}
            subSubjects={subSubjects}
            schoolGrade={schoolGrade}
        />
    )
}

export default SubSubjectsPage