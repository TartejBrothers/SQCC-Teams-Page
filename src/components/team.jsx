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
        <div className="flex flex-row font-Inter justify-around">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-white h-40 w-40 rounded-lg shadow-2xl bg-fields-bg">
              <img src="" alt="" />
            </div>
            <div className="text-white text-center py-10">
              <h1 className="text-4xl font-medium mb-5">Name</h1>
              <p className="text-2xl ">Designation</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="text-white h-40 w-40 rounded-lg shadow-2xl bg-fields-bg">
              <img src="" alt="" />
            </div>
            <div className="text-white text-center py-10">
              <h1 className="text-4xl font-medium mb-5">Name</h1>
              <p className="text-2xl ">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
