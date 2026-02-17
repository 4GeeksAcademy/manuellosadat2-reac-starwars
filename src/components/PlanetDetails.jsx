import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetDetails = () => {

  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then(res => res.json())
      .then(data => setPlanet(data.result.properties));
  }, [id]);

  if (!planet) return <h1 className="text-center mt-5">Loading...</h1>;

  return (
    <div className="container mt-5">

      <div className="row mb-4">

        <div className="col-md-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            onError={(e)=> e.target.src="https://placehold.co/600x400?text=Planet"}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6 text-center">
          <h1>{planet.name}</h1>
          <p className="text-muted">
            Planet from Star Wars universe.
          </p>
        </div>

      </div>

      <hr className="border-danger"/>

      <div className="row text-center text-danger fw-bold">

        <div className="col">Climate<br/><span className="text-dark">{planet.climate}</span></div>
        <div className="col">Population<br/><span className="text-dark">{planet.population}</span></div>
        <div className="col">Terrain<br/><span className="text-dark">{planet.terrain}</span></div>
        <div className="col">Diameter<br/><span className="text-dark">{planet.diameter}</span></div>
        <div className="col">Gravity<br/><span className="text-dark">{planet.gravity}</span></div>

      </div>

    </div>
  );
};
