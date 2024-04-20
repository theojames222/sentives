import React from "react";
import Logo from "../assets/sentives_logo-transparent.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const navigateTo = (e) => {
    e.preventDefault();
    if (e.target.value === "signUp") {
      nav("/signUp");
    } else {
      nav("/login");
    }
  };
  return (
    <div className="sticky flex justify-between mb-5 bg-blue-950">
      <img
        alt="Logo"
        src={Logo}
        width={150}
        height={100}
        onClick={() => {
          // change to / after login completed
          nav("/dashboard");
        }}
        className="cursor-pointer"
      />
      <div className="flex justify-between space-x-10 m-10 ">
        {" "}
        <button
          className="text-xl font-bold text-white"
          value="signUp"
          onClick={navigateTo}
        >
          Sign Up
        </button>
        <button
          onClick={navigateTo}
          value="login"
          className="bg-gradient-to-br from-blue-950 via-slate-700 to-slate-400 text-xl font-bold text-white px-4 rounded-lg hover:shadow-lg hover:shadow-slate-200"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
