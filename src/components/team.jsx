import React from "react";
export default function team() {
  return (
    <div>
      <div className="bg-custom-dark">
        <h1 className="text-header-green font-Bungee text-9xl text-center px-20 py-20">
          SQCC
        </h1>
        <h2 className="text-5xl mt-[-120px] text-center text-white z-10 pb-20 font-Lato">
          MEET THE TEAM
        </h2>
      </div>
      <div className="bg-content-bg">
        <div className="flex flex-row items-center justify-center text-center text-white py-20">
          <hr className="w-2/5 mx-10 border-2 border-header-green" />
          <p className="text-4xl font-Lato">CORE</p>
          <hr className="w-2/5 mx-10 border-2 border-header-green" />
        </div>
      </div>
    </div>
  );
}
