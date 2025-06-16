import React from 'react'
import Button from '../Button'
import styles from '@/app/css/components/subjects/_subSubjectsModalContent.module.scss'
const SubSubjectsModalContent = ({ modalContent, setOpenModal, subSubjectId, setReload }) => {

    const deleteSubSubject = async (id) => {
        if (id) {
            setReload(true)
            try {
                const res = await fetch(`http://localhost:3000/api/sub-subjects/${id}`, {
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
                            Supprimer la sous-matière ?
                        </p>
                        <div className={styles.buttons}>
                            <Button
                                onClick={() => setOpenModal(false)}
                                style={"green"}
                                text={"Retour"}
                            />
                            <Button
                                onClick={() => deleteSubSubject(subSubjectId)}
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

export default SubSubjectsModalContent