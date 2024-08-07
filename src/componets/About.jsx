import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
          <div className="text-4xl font-bold sm:text-right ">
            <p>Hi, I'm Favour Please Take A Look Around</p>
          </div>

          <div>
            <p>
              A little about myself, my name is Favour Chukwukelu. I'm from Las
              Vegas. In college I took an information systems class and that's
              where I was first introduced to programming. In this class we had
              to build and/or relations between data in excel. We had to write
              our own functions in cells in order to create these relations.
             <br />
             <br />
             After this class I was intrigued with programming and coding, and I’ve taught myself how to build fullstack applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
