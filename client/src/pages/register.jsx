import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

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
