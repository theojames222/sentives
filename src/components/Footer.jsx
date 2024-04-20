import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const nav = useNavigate();

  return (
    <div className="ml-10 mb-5 flex">
      <h1 className="flex">
        {" "}
        2024 Sentives. All Rights Reserved.
        <h1
          value="terms"
          className="px-5 text-blue-950 hover:underline cursor-pointer font-bold flex"
          onClick={() => {
            nav("/terms");
          }}
        >
          Terms
        </h1>
        <h1
          value={"privacy"}
          className=" text-blue-950 hover:underline cursor-pointer font-bold flex"
          onClick={() => {
            nav("/privacy");
          }}
        >
          Privacy
        </h1>
      </h1>
    </div>
  );
}
