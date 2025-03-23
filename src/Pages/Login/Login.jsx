import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import Passwordinput from "../../Components/Passwordinput";
import { validateEmail } from "../../Utils/Helpar";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid Email");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    setError("");

    // login API call
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-gray-100 h-screen p-5 flex justify-center items-center">
        <div className="bg-white p-5 rounded-md shadow-md w-96 border border-gray-200">
          <form action="" onSubmit={handleSubmit} className="space-y-4">
            <h4 className="text-2xl mb-7"> Login</h4>

            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border border-blue-500 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Passwordinput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Login
            </button>

            <p>
              Don't have an account?
              <Link to="/signup" className="text-blue-500 ">
                Create an account.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
