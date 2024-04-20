import React from "react";
import Logo from "../assets/sentives_logo-transparent.png";
import { useNavigate } from "react-router-dom";
import { SiCampaignmonitor } from "react-icons/si";
import { TbPrompt } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

export default function Sidebar() {
  const nav = useNavigate();

  return (
    <div className="sidebar px-10">
      <img
        alt="logo"
        src={Logo}
        onClick={() => {
          nav("/");
        }}
      />
      <div
        className="flex flex-col mx-auto justify-center items-center mt-10 hover:underline hover:underline-offset-4 hover:decoration-slate-300 hover:cursor-pointer"
        onClick={() => {
          nav("/campaigns");
        }}
      >
        <SiCampaignmonitor className="text-4xl text-slate-300 " />
        <p className="text-slate-300 text-3xl">Campaigns</p>
      </div>
      <div
        onClick={() => {
          nav("/dashboard");
        }}
        className="flex flex-col mx-auto justify-center items-center mt-10 hover:underline hover:underline-offset-4 hover:decoration-slate-300 hover:cursor-pointer"
      >
        <TbPrompt className="text-4xl text-slate-300 " />
        <p className="text-slate-300 text-3xl">Prompts</p>
      </div>
      <div
        onClick={() => {
          nav("/email");
        }}
        className="flex flex-col mx-auto justify-center items-center mt-10 hover:underline hover:underline-offset-4 hover:decoration-slate-300 hover:cursor-pointer"
      >
        <MdOutlineMail className="text-4xl text-slate-300 " />
        <p className="text-slate-300 text-3xl">Emails</p>
      </div>
    </div>
  );
}
