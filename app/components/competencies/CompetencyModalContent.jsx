import React from 'react'
import Button from '../Button'
import styles from '@/app/css/components/competencies/_competencyModalContent.module.scss'
const CompetencyModalContent = ({ modalContent, setOpenModal, competencyId, setReload }) => {

    const deleteCompetency = async (id) => {
        if (id) {
            setReload(true)
            try {
                const res = await fetch(`http://localhost:3000/api/competencies/${competencyId}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (!res.ok) {
                    console.error("Erreur réseau", res.status);
                    return;
                }

                await res.json()
                setOpenModal(false)
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
            }
        }
    }

    const renderModalContent = () => {
        switch (modalContent) {
            case "delete":
                return (
                    <div className={styles.deleteContent}>
                        <p>
                            Supprimer la compétence ?
                        </p>
                        <div className={styles.buttons}>
                            <Button
                                onClick={() => setOpenModal(false)}
                                style={"green"}
                                text={"Retour"}
                            />
                            <Button
                                onClick={() => deleteCompetency(competencyId)}
                                style={"red"}
                                text={"Confirmer"}
                            />
                        </div>

                    </div>
                )
            default:
                break;
        }
    }
    return (
        renderModalContent()
    )
}

export default CompetencyModalContent