import HomePageContent from "./components/pages/HomePageContent";

import fetcher from "./lib/fetch";

 const fetchPupils = async () => {
  const data = await fetcher("/api/pupils");
  return data;
};

const Home = async () => {

  const pupilsList = await fetchPupils();
  return <HomePageContent pupilsList={pupilsList} />;
};
export default Home;
