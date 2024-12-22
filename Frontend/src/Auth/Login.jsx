import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // For programmatic navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login validation logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // Redirect to the home page after successful login
    navigate('/home');
  };

  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
      <div className="pt-16">
        <Link to="/">
          <h1 className="text-center text-3xl font-bold text-[#534E55]">
            Hello Again!
          </h1>
        </Link>
        <p className="text-center text-2xl text-[#808080] mt-4">
          Welcome back you’ve been missed!
        </p>
      </div>

      <div className="flex justify-center items-center">
        {/* Changed Form to a standard <form> */}
        <form className="mt-12 text-center" onSubmit={handleSubmit}>
          <input
            className="p-5 bg-[#FFFFFF] rounded-2xl w-96 drop-shadow-md"
            placeholder="Enter username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <div className="flex mt-4 w-96 bg-[#FFFFFF] rounded-2xl drop-shadow-md">
            <input
              className="py-1 pb-5 px-5 w-96 mt-4 bg-[#FFFFFF] my-auto focus:outline-none rounded-2xl border-transparent"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="cursor-pointer my-auto px-5 text-[#808080]"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <p className="text-center text-[#5B5B5E] mt-4">Recovery Password</p>

          <button
            className="p-5 mt-8 bg-[#FE724C] rounded-2xl drop-shadow-md"
            type="submit"
          >
            <h1 className="text-center text-white w-80 font-medium text-lg">
              SIGN IN
            </h1>
          </button>
        </form>
      </div>

      <Link to="/register">
        <h2 className="text-center mt-6">
          Not a Member? &nbsp;
          <span className="text-[#FE724C]">Register Now</span>
        </h2>
      </Link>

      <div className="mt-4 text-center p-3">
        <h1 className="text-center">&nbsp; Or continue with &nbsp;</h1>
      </div>

      <div className="text-center mt-4">GOOGLE</div>
    </div>
  );
}

export default Login;
