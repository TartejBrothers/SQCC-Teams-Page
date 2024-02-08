import React, { useState } from "react";
import LinkedInIcon from "../assets/logos/Linkedin.png";
import GithubIcon from "../assets/logos/GitHub.png";
import InstagramIcon from "../assets/logos/Instagram.png";
import MailIcon from "../assets/logos/Mail.png";

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isGreen, setIsGreen] = useState(0);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? -1 : index);
    setIsGreen(index === isGreen ? -1 : index);
  };

  return (
    <div>
      <div className="bg-custom-dark">
        <h1 className="text-header-green font-Bungee text-9xl text-center px-20 py-20 lg:text-6xl">
          SQCC
        </h1>
        <h2 className="text-5xl mt-[-120px] text-center text-white z-10 pb-20 font-Lato lg:text-xl lg:mt-[-110px]">
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
          <ProfileCard
            index={0}
            hoveredIndex={hoveredIndex}
            clickedIndex={clickedIndex}
            onHover={handleHover}
            onClick={handleClick}
            linkedinUrl="https://www.linkedin.com/in/"
            githubUrl="https://github.com/"
            instagramUrl="https://www.instagram.com/"
            mailUrl="mailto:"
          />
          <ProfileCard
            index={1}
            hoveredIndex={hoveredIndex}
            clickedIndex={clickedIndex}
            onHover={handleHover}
            onClick={handleClick}
            linkedinUrl="https://www.linkedin.com/in/"
            githubUrl="https://github.com/"
            instagramUrl="https://www.instagram.com/"
            mailUrl="mailto:"
          />
        </div>
        <div className="flex flex-row items-center justify-center text-center text-white py-20">
          <hr className="w-2/5 mx-10 border-2 border-header-green" />
          <p className="text-4xl font-Lato">HEADS</p>
          <hr className="w-2/5 mx-10 border-2 border-header-green" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row font-Inter justify-around lgs:flex-col lgs:gap-10">
            <ProfileCard
              index={3}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={4}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={5}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
            />
          </div>
          <div className="flex flex-row font-Inter justify-around lgs:flex-col lgs:gap-10">
            <ProfileCard
              index={6}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={7}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={8}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
          </div>
          <div className="flex flex-row font-Inter justify-around lgs:flex-col lgs:gap-10">
            <ProfileCard
              index={9}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={10}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={11}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center font-Inter gap-10 font-semibold lgx:flex-col lgx:gap-5 lgx:align-center mb-20">
          <div
            className={`rounded-xl px-10 py-2 lgx:w-4/5 lgx:mx-auto text-center ${
              isGreen === 0 ? "bg-header-green" : "bg-white"
            }`}
            onClick={() => handleClick(0)}
          >
            Core Quantum
          </div>
          <div
            className={`rounded-xl px-10 py-2 lgx:w-4/5 lgx:mx-auto text-center ${
              isGreen === 1 ? "bg-header-green" : "bg-white"
            }`}
            onClick={() => handleClick(1)}
          >
            Web Development
          </div>
          <div
            className={`rounded-xl px-10 py-2 lgx:w-4/5 lgx:mx-auto text-center ${
              isGreen === 2 ? "bg-header-green" : "bg-white"
            }`}
            onClick={() => handleClick(2)}
          >
            AI/ML
          </div>
          <div
            className={`rounded-xl px-10 py-2 lgx:w-4/5 lgx:mx-auto text-center ${
              isGreen === 3 ? "bg-header-green" : "bg-white"
            }`}
            onClick={() => handleClick(3)}
          >
            Editorial
          </div>
          <div
            className={`rounded-xl px-10 py-2 lgx:w-4/5 lgx:mx-auto text-center ${
              isGreen === 4 ? "bg-header-green" : "bg-white"
            }`}
            onClick={() => handleClick(4)}
          >
            Corporate
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row font-Inter justify-around lgs:flex-col lgs:gap-10">
            <ProfileCard
              index={12}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={13}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={14}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={15}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
          </div>
          <div className="flex flex-row font-Inter justify-around lgs:flex-col lgs:gap-10">
            <ProfileCard
              index={16}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={17}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={18}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
            <ProfileCard
              index={19}
              hoveredIndex={hoveredIndex}
              clickedIndex={clickedIndex}
              onHover={handleHover}
              onClick={handleClick}
              linkedinUrl="https://www.linkedin.com/in/"
              githubUrl="https://github.com/"
              instagramUrl="https://www.instagram.com/"
              mailUrl="mailto:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCard({
  index,
  hoveredIndex,
  clickedIndex,
  onHover,
  onClick,
  linkedinUrl,
  githubUrl,
  instagramUrl,
  mailUrl,
}) {
  const isHovered = hoveredIndex === index || clickedIndex === index;

  return (
    <div
      className="flex flex-col items-center justify-center "
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(-1)}
      onClick={() => onClick(index)}
    >
      <div
        className={`text-white h-40 w-40 rounded-lg shadow-2xl bg-fields-bg lg:h-20 lg:w-20 ${
          isHovered ? "transform scale-110 transition-transform" : ""
        }`}
      >
        <img src="" alt="" />
      </div>
      <div className="text-white text-center pt-10 pb-5 font-Inter">
        <h1 className="text-4xl font-medium mb-2 lg:text-xl">Name</h1>
        <p className="text-2xl lg:text-xs ">Designation</p>
      </div>
      <div
        className="flex flex-row lg:w-20"
        id="social-media"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub" />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href={mailUrl} target="_blank" rel="noopener noreferrer">
          <img src={MailIcon} alt="Mail" />
        </a>
      </div>
    </div>
  );
}
