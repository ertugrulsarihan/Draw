import { ADD_PERSON, DELETE_PERSON } from "../Actions/actions";

const initialState = { Persons: [] };

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {...state,action};

    case DELETE_PERSON:
      return state.Persons.filter((m) => m !== action.id);

    default:
      return state;
  }
}
