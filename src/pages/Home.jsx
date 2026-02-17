import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterSection } from "../components/CharacterSection.jsx";
import { getCharacters, getPlanets } from "../store";

export const Home = () => {

  const { dispatch } = useGlobalReducer();

  useEffect(() => {
    getCharacters(dispatch);
    getPlanets(dispatch);
  }, [dispatch]);

  return <CharacterSection />;
};
