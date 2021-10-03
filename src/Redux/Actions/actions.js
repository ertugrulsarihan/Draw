export const ADD_PERSON = "ADD_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";

export function Add(person) {
  return { type: ADD_PERSON, person };
}

export function Delete(id) {
  return { type: DELETE_PERSON, id };
}
