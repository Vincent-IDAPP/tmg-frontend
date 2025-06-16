"use client"
import styles from "./css/pages/_home.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

import PupilsTable from "./components/PupilsTable";
import Heading from "./components/Heading";


export default function Home() {

  const fetchAllPupils = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/pupils");
      if (!res.ok) {
        console.error("Erreur réseau", res.status);
        return;
      }
      const data = await res.json();

      setPupilsList(data)
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  }

  const [pupilsList, setPupilsList] = useState([])
  useEffect(() => {
    fetchAllPupils()
  }, [])

  return (
    <section className={styles.container}>
      <Heading title={"Liste des élèves"} />
      <PupilsTable pupilsList={pupilsList} />
    </section>
  );
}
