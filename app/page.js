import HomePageContent from "./components/pages/HomePageContent";

const Home = async () => {
  const fetchPupils = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/pupils");
      if (!res.ok) {
        console.error("Erreur réseau", res.status);
        return;
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  const pupilsList = await fetchPupils();

  return <HomePageContent pupilsList={pupilsList} />;
};
export default Home;
