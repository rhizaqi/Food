import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [register, setRegister] = useState({
    
  });
  const navigate = useNavigate();

  const inputRegister = (event) => {
    const { value, id } = event.target;
    setRegister({
      ...register,
      [id]: value,
    });
  };

  const handleRegister = (e) => {
    try {
    } catch (error) {
      console.log(`errror in register handler`);
      throw error;
    }
  };

  const moveToLogin = async () => {
    navigate("/login");
  };

  return (
    <div className="p-5">
      ini page Register
      <div>
        <button
          className="w-20 h-20 bg-red-200 rounded-xl"
          onClick={() => moveToLogin()}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
