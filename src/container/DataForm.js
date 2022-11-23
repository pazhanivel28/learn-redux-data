import React, { useState } from "react";
import { setData } from "../redux/Actions/actions";
import { useDispatch } from "react-redux";

let initialState = {
  name: "",
  email: "",
  age: "",
};
function DataForm() {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setData(userData));
    console.log(userData);
    setUserData(initialState);
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={userData.name}
          />
        </div>
        <div>
          Email
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div>
          Age
          <input
            type="Number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            value={userData.age}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default DataForm;
