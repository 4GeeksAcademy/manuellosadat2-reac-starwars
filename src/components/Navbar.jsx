import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">

        <Link to="/">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
            style={{ width: "80px", filter: "brightness(0)" }}
          />
        </Link>

        <div className="ml-auto dropdown">

          <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            Favorites {store.favorites.length}
          </button>

          {/* DROPDOWN */}
          <ul className="dropdown-menu dropdown-menu-end">

            {store.favorites.length === 0 && (
              <li className="dropdown-item text-muted">
                No favorites yet
              </li>
            )}

            {store.favorites.map((fav, i) => (
              <li key={i} className="dropdown-item d-flex justify-content-between">

                {fav}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FAVORITE",
                      payload: fav
                    })
                  }
                >
                  🗑
                </span>
              </li>
            ))}

          </ul>

        </div>
      </div>
    </nav>
  );
};
