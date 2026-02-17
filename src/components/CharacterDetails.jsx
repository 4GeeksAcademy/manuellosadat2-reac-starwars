import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterDetails = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data.result.properties));
  }, [id]);

  if (!character) return <h1 className="text-center mt-5">Loading...</h1>;

  return (
    <div className="container mt-5">

      {/* TOP SECTION */}
      <div className="row mb-4">

        <div className="col-md-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            onError={(e)=> e.target.src="https://placehold.co/600x400?text=No+Image"}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6 text-center">
          <h1>{character.name}</h1>
          <p className="text-muted">
            {character.name} is a character from Star Wars universe.
          </p>
        </div>

      </div>

      <hr className="border-danger"/>

      {/* STATS */}
      <div className="row text-center text-danger fw-bold">

        <div className="col">Name<br/><span className="text-dark">{character.name}</span></div>
        <div className="col">Gender<br/><span className="text-dark">{character.gender}</span></div>
        <div className="col">Height<br/><span className="text-dark">{character.height}</span></div>
        <div className="col">Mass<br/><span className="text-dark">{character.mass}</span></div>
        <div className="col">Hair<br/><span className="text-dark">{character.hair_color}</span></div>
        <div className="col">Eyes<br/><span className="text-dark">{character.eye_color}</span></div>

      </div>
    </div>
  );
};
