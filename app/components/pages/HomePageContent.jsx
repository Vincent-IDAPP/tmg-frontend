"use client";
import React from "react";
import { useState, useEffect } from "react";

import styles from "@/app/css/pages/_homePageContent.module.scss";

import PupilsTable from "../PupilsTable";
import Heading from "../Heading";
import Modal from "../Modal";
import HomeModalContent from "../home/HomeModalContent";
const HomePageContent = ({ pupilsList }) => {
  const [reload, setReload] = useState(false);
  const [data, setData] = useState(pupilsList);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [pupilId, setPupilId] = useState(null);
  const fetchPupils = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/pupils");
      if (!res.ok) {
        console.error("Erreur réseau", res.status);
        return;
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  useEffect(() => {
    if (reload === true) {
      fetchPupils();
    }
    setReload(false);
  }, [reload]);


  return (
    <>
      <section className={styles.homePageContent}>
        <Heading title={"Liste des élèves"} />
        <PupilsTable
          pupilsList={data}
          setPupilsList={setData}
          setPupilId={setPupilId}
          setModalContent={setModalContent}
          setOpenModal={setOpenModal}
          setReload={setReload}
        />
      </section>
      {openModal && (
        <Modal>
          <HomeModalContent
            modalContent={modalContent}
            pupilId={pupilId}
            setOpenModal={setOpenModal}
            setReload={setReload}
          />
        </Modal>
      )}
    </>
  );
};

export default HomePageContent;
