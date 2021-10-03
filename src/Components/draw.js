import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PERSON } from "../Redux/Actions/actions";

export default function Draw() {
  const [person, setPerson] = useState(null);
  const [email, setEmail] = useState(null);
  const state = useSelector((state) => state.Persons);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setPerson(e.target.value);
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <div style={{ marginTop: "120px" }} id="draw" className="row">
      <div style={{ border: "2px solid black" }} className="col-12 col-md-6">
        <h5 style={{ textAlign: "center" }}>Add Person</h5>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: ADD_PERSON, payload: { person, email } });
          }}
          style={{ textAlign: "center" }}
        >
          <input
            placeholder="Enter Email Adress"
            name="email"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
          <input
            placeholder="Enter Name"
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div
        style={{ textAlign: "center", border: "2px solid black" }}
        className="col-12 col-md-6"
      >
        <h5> Draw List</h5>

        <button>Draw</button>
        <br />
      </div>
    </div>
  );
}
