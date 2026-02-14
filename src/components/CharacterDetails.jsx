import { useParams } from "react-router-dom";

const characters = [
  { id:1, name:"Luke Skywalker", gender:"male", hair:"blond", eyes:"blue", population:"unknown", climate:"temperate", diameter:"17200" },
  { id:2, name:"C-3PO", gender:"n/a", hair:"n/a", eyes:"yellow", population:"n/a", climate:"n/a", diameter:"n/a" },
  { id:3, name:"R2-D2", gender:"n/a", hair:"n/a", eyes:"red", population:"n/a", climate:"n/a", diameter:"n/a" }
];

export const CharacterDetails = () => {

  const { id } = useParams();

  const character = characters.find(c => c.id === parseInt(id));

  if (!character) return <h1 className="text-center mt-5">Character not found</h1>;

  return (
    <div className="container mt-5">

      {/* TOP SECTION */}
      <div className="row mb-4">

        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6 text-center">
          <h1>{character.name}</h1>
          <p className="text-muted">
            This is a detailed description of {character.name}.
            Here you can put lore, history, or API info.
          </p>
        </div>

      </div>

      <hr className="border-danger"/>

      {/* STATS */}
      <div className="row text-center text-danger fw-bold">

        <div className="col">Name<br/><span className="text-dark">{character.name}</span></div>
        <div className="col">Gender<br/><span className="text-dark">{character.gender}</span></div>
        <div className="col">Hair<br/><span className="text-dark">{character.hair}</span></div>
        <div className="col">Eyes<br/><span className="text-dark">{character.eyes}</span></div>
        <div className="col">Climate<br/><span className="text-dark">{character.climate}</span></div>
        <div className="col">Diameter<br/><span className="text-dark">{character.diameter}</span></div>

      </div>

    </div>
  );
};
