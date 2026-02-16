import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterSection = () => {

  const { dispatch } = useGlobalReducer();

  const characters = [
    { id:1,name:"Luke Skywalker",gender:"male",hair:"blond",eyes:"blue"},
    { id:2,name:"C-3PO",gender:"n/a",hair:"n/a",eyes:"yellow"},
    { id:3,name:"R2-D2",gender:"n/a",hair:"n/a",eyes:"red"},
    { id:4,name:"Darth Vader",gender:"male",hair:"none",eyes:"yellow"},
    { id:5,name:"Leia",gender:"female",hair:"brown",eyes:"brown"}
  ];

  return (
    <div className="container mt-5">

      <h1 className="text-danger mb-4">Characters</h1>

      <div className="d-flex overflow-auto pb-3">

        {characters.map(char => (
          <div key={char.id} className="card me-4" style={{ minWidth: "18rem" }}>

            <img src="https://placehold.co/500x300?text=500+x+300" className="card-img-top"/>

            <div className="card-body">

              <h5>{char.name}</h5>

              <p>
                Gender: {char.gender}<br/>
                Hair: {char.hair}<br/>
                Eyes: {char.eyes}
              </p>

              <div className="d-flex justify-content-between">

                <Link to={`/character/${char.id}`}>
                  <button className="btn btn-outline-primary">
                    Learn more
                  </button>
                </Link>

                <button
                  className="btn btn-outline-warning"
                  onClick={() =>
                    dispatch({
                      type: "ADD_FAVORITE",
                      payload: char.name
                    })
                  }
                >
                  ♡
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>

      
      <h1 className="text-danger mb-4 mt-5">Planets</h1>

      <div className="d-flex overflow-auto pb-3">

        {characters.map(char => (
          <div key={char.id} className="card me-4" style={{ minWidth: "18rem" }}>

            <img src="https://placehold.co/500x300?text=500+x+300" className="card-img-top"/>

            <div className="card-body">

              <h5>{char.name}</h5>

              <p>
                Gender: {char.gender}<br/>
                Hair: {char.hair}<br/>
                Eyes: {char.eyes}
              </p>

              <div className="d-flex justify-content-between">

                <Link to={`/character/${char.id}`}>
                  <button className="btn btn-outline-primary">
                    Learn more
                  </button>
                </Link>

                <button
                  className="btn btn-outline-warning"
                  onClick={() =>
                    dispatch({
                      type: "ADD_FAVORITE",
                      payload: char.name
                    })
                  }
                >
                  ♡
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
