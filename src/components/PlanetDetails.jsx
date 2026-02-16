import { useParams } from "react-router-dom";


const planets = [
  { id:1, name:"Tatooine", population:"200000", terrain:"desert", climate:"arid", diameter:"10465" },
  { id:2, name:"Alderaan", population:"2000000000", terrain:"grasslands", climate:"temperate", diameter:"12500" },
  { id:3, name:"Hoth", population:"unknown", terrain:"tundra", climate:"frozen", diameter:"7200" }
];

export const PlanetDetails = () => {

  const { id } = useParams();

  const planet = planets.find(p => p.id === parseInt(id));

  if (!planet) return <h1 className="text-center mt-5">Planet not found</h1>;

  return (
    <div className="container mt-5">

      {/* TOP SECTION */}
      <div className="row mb-4">

        <div className="col-md-6">
          <img
            src="https://placehold.co/500x300?text=500+x+300"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6 text-center">
          <h1>{planet.name}</h1>
          <p className="text-muted">
            This is a detailed description of {planet.name}.
            Here you can put lore, history, or API info.
          </p>
        </div>

      </div>

      <hr className="border-danger"/>

      {/* STATS */}
      <div className="row text-center text-danger fw-bold">

        <div className="col">Population<br/><span className="text-dark">{planet.population}</span></div>
        <div className="col">Terrain<br/><span className="text-dark">{planet.terrain}</span></div>
        <div className="col">Climate<br/><span className="text-dark">{planet.climate}</span></div>
        <div className="col">Diameter<br/><span className="text-dark">{planet.diameter}</span></div>

      </div>
    </div>
  );
};
