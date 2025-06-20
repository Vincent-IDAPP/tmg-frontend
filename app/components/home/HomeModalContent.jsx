import React from "react";
import styles from "@/app/css/components/home/_homeModalContent.module.scss"
import Button from "../Button";
const HomeModalContent = ({modalContent, setOpenModal, pupilId, setReload}) => {
  const deletePupil = async (id) => {
    if (id) {
      try {
        const res = await fetch(
          `http://localhost:3000/api/pupils/${pupilId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          console.error("Erreur réseau", res.status);
          setReload(false)
          setOpenModal(false);
          return;
        }
        
        await res.json();
        setReload(true);
        setOpenModal(false);
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    }
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case "delete":
        return (
          <div className={styles.deleteContent}>
            <p>Supprimer l'élève ?</p>
            <div className={styles.buttons}>
              <Button
                onClick={() => setOpenModal(false)}
                style={"green"}
                text={"Retour"}
              />
              <Button
                onClick={() => deletePupil(pupilId)}
                style={"red"}
                text={"Confirmer"}
              />
            </div>
          </div>
        );
      default:
        break;
    }
  };
  return renderModalContent();
};

export default HomeModalContent;
