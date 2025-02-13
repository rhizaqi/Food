import axios from "../config/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputRegister = (event) => {
    const { value, id } = event.target;
    setRegister({
      ...register,
      [id]: value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios({
        url: "/user/register",
        method: "post",
        data: register,
      });

      navigate("/login");
    } catch (error) {
      console.log(`errror in register handler`);
      throw error;
    }
  };

  const moveToLogin = async () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center p-5 bg-green-200 w-screen h-screen ">
      <div>ini page register</div>
      <form onSubmit={handleRegister}>
        <div className="flex flex-col">
          <label className="mt-5 mb-2"> Name </label>
          <input
            type="text"
            id="name"
            value={register.name}
            onChange={(event) => inputRegister(event)}
            className="p-2 bg-gray-400 w-60 h-10 rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <label className="mt-5 mb-2"> Email </label>
          <input
            type="text"
            id="email"
            value={register.email}
            onChange={(event) => inputRegister(event)}
            className="p-2 bg-gray-400 w-60 h-10 rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <label className="mt-5 mb-2"> Password </label>
          <input
            type="password"
            id="password"
            value={register.password}
            onChange={(event) => inputRegister(event)}
            className="p-2 bg-gray-400 w-60 h-10 rounded-xl"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button type="submit" className="w-40 h-10 bg-red-200 rounded-xl">
            Save
          </button>
        </div>
      </form>
      <button
        onClick={() => moveToLogin()}
        className="m-4 w-40 h-10 bg-blue-200 rounded-xl"
      >
        Login
      </button>
    </div>
  );
}
