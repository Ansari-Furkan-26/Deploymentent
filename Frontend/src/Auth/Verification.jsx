import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Verify() {
  const navigate = useNavigate(); // For programmatic navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle OTP verification logic here
    console.log("OTP submitted");

    // Navigate to the home page after successful verification
    navigate('/home');
  };

  return (
    <div className="h-screen bg-[#FAF5FF] p-5">
      <div className="pt-24">
        <Link to="/Index">
          <h1 className="text-center text-3xl font-bold text-[#534E55]">Login</h1>
        </Link>
        <p className="text-center text-lg text-[#5B5B5E] mt-12">
          An OTP has been sent to 22bit16@aiktc.ac.in
        </p>
      </div>

      {/* Changed Form to a standard <form> */}
      <form className="mt-4 text-center" onSubmit={handleSubmit}>
        <input
          className="p-5 mt-4 bg-[#FFFFFF] rounded-2xl w-96 drop-shadow-md"
          placeholder="Enter OTP"
          type="text"
          required
        />
        <p className="text-center text-[#5B5B5E] mt-4">Re-send OTP</p>

        <button
          className="p-5 mt-8 bg-[#FE724C] rounded-2xl w-96 drop-shadow-md"
          type="submit"
        >
          <h1 className="text-center text-white font-medium text-lg">VERIFY OTP</h1>
        </button>
      </form>

      <Link to="/Login">
        <h2 className="text-center mt-7">
          Already have an account? &nbsp;
          <span className="text-[#FE724C]">Login</span>
        </h2>
      </Link>
    </div>
  );
}

export default Verify;
