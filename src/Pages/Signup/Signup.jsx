import React from "react";
import { Link } from "react-router-dom";
import Passwordinput from "../../Components/Passwordinput";
import { validateEmail } from "../../Utils/Helpar";

function Signup() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Name is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please provide a valid Email");
      return;
    }
    if (!phone) {
      setError("Phone number is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    setError("");

    // Signup API call
  };

  return (
    <div className="bg-gray-100 h-screen p-5 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-md w-96 border border-gray-200">
        <form action="" onSubmit={handleSubmit} className="space-y-4">
          <h4 className="text-2xl mb-7">Signup</h4>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-blue-500 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 border border-blue-500 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-2 border border-blue-500 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Passwordinput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Create an account
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p>
            Have an account?
            <Link to="/login" className="text-blue-500 ">
              Login.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
