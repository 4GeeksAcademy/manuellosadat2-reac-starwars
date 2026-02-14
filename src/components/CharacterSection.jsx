import { Link } from "react-router-dom";

const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    gender: "male",
    hair: "blond",
    eyes: "blue"
  },
  {
    id: 2,
    name: "C-3PO",
    gender: "n/a",
    hair: "n/a",
    eyes: "yellow"
  },
  {
    id: 3,
    name: "R2-D2",
    gender: "n/a",
    hair: "n/a",
    eyes: "red"
  },
  {
    id: 4,
    name: "Darth Vader",
    gender: "male",
    hair: "none",
    eyes: "yellow"
  },
  {
    id: 5,
    name: "Leia",
    gender: "female",
    hair: "brown",
    eyes: "brown"
  }
];

export const CharacterSection = () => {
  return (
    <div className="container mt-5">

      {/* TITLE */}
      <h1 className="text-danger mb-4">Characters</h1>

      {/* SCROLL CONTAINER */}
      <div className="d-flex overflow-auto pb-3">

        {characters.map(char => (
          <div key={char.id} className="card me-4" style={{ minWidth: "18rem" }}>
            
            {/* IMAGE */}
            <img
              src="https://via.placeholder.com/400x200"
              className="card-img-top"
              alt="character"
            />

            {/* BODY */}
            <div className="card-body">

              <h5 className="card-title">{char.name}</h5>

              <p className="card-text mb-4">
                Gender: {char.gender} <br />
                Hair Color: {char.hair} <br />
                Eye-Color: {char.eyes}
              </p>

              {/* FOOTER ACTIONS */}
              <div className="d-flex justify-content-between">

                <Link to={`/single/${char.id}`}>
                  <button className="btn btn-outline-primary">
                    Learn more!
                  </button>
                </Link>

                <button className="btn btn-outline-warning">
                  ♡
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>


      {/* TITLE */}
      <h1 className="text-danger mb-4 mt-5">Planets</h1>

      {/* SCROLL CONTAINER */}
      <div className="d-flex overflow-auto pb-3">

        {characters.map(char => (
          <div key={char.id} className="card me-4" style={{ minWidth: "18rem" }}>
            
            {/* IMAGE */}
            <img
              src="https://via.placeholder.com/400x200"
              className="card-img-top"
              alt="character"
            />

            {/* BODY */}
            <div className="card-body">

              <h5 className="card-title">{char.name}</h5>

              <p className="card-text mb-4">
                Gender: {char.gender} <br />
                Hair Color: {char.hair} <br />
                Eye-Color: {char.eyes}
              </p>

              {/* FOOTER ACTIONS */}
              <div className="d-flex justify-content-between">

                <Link to={`/single/${char.id}`}>
                  <button className="btn btn-outline-primary">
                    Learn more!
                  </button>
                </Link>

                <button className="btn btn-outline-warning">
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
