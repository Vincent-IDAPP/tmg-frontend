import ChartsPageContent from '@/app/components/pages/ChartsPageContent';
const ChartsPage = async({params}) => {

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

    const { id } = await params;
    const pupilGrades = await fetchPupilGrades(id)

    return (
        <ChartsPageContent
            pupilGrades={pupilGrades}
        />
    )
}



export default ChartsPage