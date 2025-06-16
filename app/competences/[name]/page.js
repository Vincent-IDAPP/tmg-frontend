import React from 'react'
import CompenteciesPageContent from '../../components/pages/CompenteciesPageContent'
const CompenteciesPage = async ({ params }) => {


  const schoolGrades = [
    { id: 1, name: "CE2" },
    { id: 2, name: "CM1" },
    { id: 3, name: "CM2" }
  ]

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
  const fetchCompetencies = async (schoolGrade) => {
    try {
      const res = await fetch(`http://localhost:3000/api/competencies/school-grade/${schoolGrade}`);
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

  const findSchoolGradeId = () => {
    return schoolGrades.find((grade) => (grade.name === name))
  }

  const subjects = await fetchSubjects();
  const subSubjects = await fetchSubSubjects();
  const schoolGrade = findSchoolGradeId();
  
  const competencies = await fetchCompetencies(schoolGrade.id);


  return (
    <CompenteciesPageContent
      subjects={subjects}
      subSubjects={subSubjects}
      competencies={competencies}
      schoolGrade={schoolGrade}
    />
  )
}

export default CompenteciesPage