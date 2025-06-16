import React from 'react'
import PupilPageContent from '@/app/components/pages/PupilPageContent';
const PupilPage = async ({ params }) => {

    const fetchPupilGrades = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/grades/pupil/${id}`);
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
    const fetchPupil = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/pupils/${id}`);
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
    const fetchCompetencies = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/competencies`);
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

    const { id } = await params;
    const pupil = await fetchPupil(id);
    const pupilGrades = await fetchPupilGrades(id);
    const subjects = await fetchSubjects();
    const subSubjects = await fetchSubSubjects();
    const competencies = await fetchCompetencies();

    return (
        <PupilPageContent
            pupil={pupil}
            pupilGrades={pupilGrades}
            subjects={subjects}
            subSubjects={subSubjects}
            competencies={competencies}
        />
    )
}

export default PupilPage