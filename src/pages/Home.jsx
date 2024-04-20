import React from "react";
import Navbar from "../components/Navbar";
import Marketingimage from "../assets/homeimg1.jpg";
import Image1 from "../assets/target.png";
import Image2 from "../assets/Gift.png";
import Image3 from "../assets/Robot.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex justify-between items-center align-center px-10 mb-10">
          <div className="flex flex-col mx-auto justify-center align-center items-center">
            <h1 className="font-bold text-5xl">Viral Marketing with AI</h1>
            <p className="mt-4 font-semibold text-2xl">
              Reward Loyalty. Expand Reach. Let AI Handle the Details.
            </p>
            <button
              onClick={() => {
                nav("/about");
              }}
              className=" mt-5 rounded-lg text-2xl text-white font-bold px-2 py-3 bg-blue-950 hover:shadow-lg hover:shadow-slate-300 hover:underline"
            >
              Learn More
            </button>
          </div>
          <div>
            <img alt="marketingImage" src={Marketingimage} width={500} />
          </div>
        </div>
        <div className="flex flex-col space-y-10 bg-slate-100 mb-10">
          <h2 className="flex align-center justify-center items-center mx-auto text-4xl font-bold mb-10 pt-10">
            Grow your brand with referral marketing.
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-5 align-center items-center justify-center ">
              <img
                alt="targetImage"
                src={Image1}
                className=""
                width={160}
                height={160}
              />
              <h4 className="text-xl font-bold text-center">
                Dynamic Referral System
              </h4>
              <p className="text-center text-lg px-20">
                Transform your followers into brand ambassadors. Our seamless
                referral system magnifies your reach and impact.
              </p>
            </div>
            <div className="flex flex-col space-y-5 align-center items-center justify-center ">
              <img
                alt="giftImage"
                src={Image2}
                className=" "
                width={160}
                height={160}
              />
              <h4 className="text-xl font-bold text-center">Tiered Rewards</h4>
              <p className="text-center text-lg px-20">
                Engage with tailored rewards, from free content to giveaways.
                Every referral matters—show your community they're valued.
              </p>
            </div>
            <div className="flex flex-col space-y-5 align-center items-center justify-center ">
              <img
                alt="robotImage"
                src={Image3}
                className=" "
                width={160}
                height={160}
              />
              <h4 className="text-xl font-bold text-center">
                AI-Powered Outreach
              </h4>
              <p className="text-center text-lg px-20">
                Say goodbye to generic emails. Our AI personalizes each message,
                optimizing for engagement and conversion.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
