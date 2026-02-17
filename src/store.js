export const initialStore = () => {
  return {
    message: null,

    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ],

    favorites: [],

    characters: [],
    planets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case "add_task":
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map(todo =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      }

    case "ADD_FAVORITE":
      if (store.favorites.includes(action.payload)) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }

    case "REMOVE_FAVORITE":
      return {
        ...store,
        favorites: store.favorites.filter(f => f !== action.payload)
      }

    case "SET_CHARACTERS":
      return {
        ...store,
        characters: action.payload
      }

    case "SET_PLANETS":
      return {
        ...store,
        planets: action.payload
      }

    default:
      return store;
  }
}
 

export const getCharacters = async (dispatch) => {
  const res = await fetch("https://www.swapi.tech/api/people");
  const data = await res.json();

  dispatch({
    type: "SET_CHARACTERS",
    payload: data.results
  });
};

export const getPlanets = async (dispatch) => {
  const res = await fetch("https://www.swapi.tech/api/planets");
  const data = await res.json();

  dispatch({
    type: "SET_PLANETS",
    payload: data.results
  });
};
