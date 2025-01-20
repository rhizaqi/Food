import { useState } from "react";
import axios from "../config/config.jsx";
import { data, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const moveToRegister = async () => {
    navigate("/register");
  };

  const inputHandler = (event) => {
    const { value, id } = event.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const loginHandle = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios({
        method: "post",
        url: "/user/login",
        data: user,
      });

      // console.log(goLogin, `>> ??`);
      localStorage.setItem("access_token", data.access_token)
      navigate("/")
    } catch (error) {
      console.log(error, `error login`);
      throw error;
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center p-5 bg-green-200 w-screen h-screen ">
      <div>ini page login</div>
      <form onSubmit={loginHandle}>
        <div className="flex flex-col">
          <label className="mt-5 mb-2"> Email </label>
          <input
            type="text"
            id="email"
            value={user.email}
            onChange={(event) => inputHandler(event)}
            className="p-2 bg-gray-400 w-30 h-10 rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <label className="mt-5 mb-2"> Password </label>
          <input
            type="text"
            id="password"
            value={user.password}
            onChange={(event) => inputHandler(event)}
            className="p-2 bg-gray-400 w-30 h-10 rounded-xl"
          />
        </div>
        <button type="submit" className="mt-2 w-20 h-10 bg-red-200 rounded-xl">
          Login
        </button>
      </form>
      {/* <button
        onClick={() => moveToRegister()}
        className="w-20 h-10 bg-red-200 rounded-xl"
      >
        Register
      </button> */}
    </div>
  );
}
