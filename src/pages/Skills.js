import React from "react";
import { ResponsiveBubbleHtml } from "@nivo/circle-packing";
import * as sp from "../utils/styleProvider";

const root = {
  name: "skills",
  color: sp.blackColor,
  children: [
    {
      name: "JS",
      color: sp.aquaColor,
      loc: 800000,
    },
    {
      name: "Html",
      color: sp.aquaColor,
      loc: 400000,
    },
    {
      name: "Css",
      color: sp.aquaColor,
      loc: 400000,
    },
    {
      name: "React",
      color: sp.aquaColor,
      loc: 300000,
    },
    {
      name: "Angular",
      color: sp.aquaColor,
      loc: 400000,
    },
    {
      name: "ASP.NET",
      color: sp.aquaColor,
      loc: 1000000,
    },
    {
      name: "Sql",
      color: sp.aquaColor,
      loc: 500000,
    },
    {
      name: "Git",
      color: sp.aquaColor,
      loc: 300000,
    },
    // {
    // "name": ".Net Core",
    // "color": aquaColor,
    // "loc": 450000
    // },
    {
      name: "C#",
      color: sp.aquaColor,
      loc: 400000,
    },
    {
      name: "Java",
      color: sp.aquaColor,
      loc: 300000,
    },
  ],
};

export default function Skills() {
  return (
    <div className="md:flex m-5">
      <div className="md:w-1/3 md:m-auto">
        {/* description block */}
        <div className="block">
          <p>
            <span className={sp.titleStyle}>Skillset</span>
          </p>
          <p>
            <span className={sp.primaryStyle}>
              Currently hired as a Senior Full-stack developer , with 4+ Years
              of experience , seeking soon to become a Freelance.
            </span>
          </p>
        </div>
        {/* skill graph */}
        <div className="w-72 h-72 lg:w-100 lg:h-100 block">
          <ResponsiveBubbleHtml
            root={root}
            identity="name"
            value="loc"
            colors={(c) => c.color}
            labelTextColor={sp.blackColor}
            labelSkipRadius={10}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
            isZoomable={false}
            isInteractive={false}
            labelSkipRadius={25}
          />
        </div>
      </div>
      <div className="md:w-1/3 md:m-auto">
        {/* language skills */}
        <div className="block">
          <p>
            <span className={sp.titleStyle2}>Languages</span>
          </p>
          <p>
            <span className={sp.primaryStyle}>
              I'm a native Spanish & Italian speaker , during my career I've
              worked for several customers across Europe and Latin America ,
              following and directing hundreds of meetings .
            </span>
          </p>
          <div className="text-aqua md:w-2/3 mt-5">
            <p>Italian</p>
            <div className="bg-gray-600 m-1">
              <div className="bg-aqua w-full text-black p-1">
                Written Skills
              </div>
            </div>
            <div className="bg-gray-600 m-1">
              <div className="bg-aqua w-full text-black p-1">Spoken Skills</div>
            </div>
          </div>

          <div className="text-aqua md:w-2/3">
            <p>Spanish (castilian)</p>
            <div className="bg-gray-600 m-1">
              <div className="bg-aqua w-6/12 text-black p-1">
                Written Skills
              </div>
            </div>
            <div className="bg-gray-600 m-1">
              <div className="bg-aqua w-8/12 text-black p-1">Spoken Skills</div>
            </div>
          </div>

          <div className="text-aqua md:w-2/3">
            <p>English</p>
            <div className="bg-gray-600 m-1">
              <div className="bg-aqua w-10/12 text-black p-1">
                Written Skills
              </div>
            </div>
            <div className="bg-gray-600 m-1">
              <div className="bg-aqua w-11/12 text-black p-1">
                Spoken Skills
              </div>
            </div>
          </div>
        </div>
        {/* linkedin link */}
        <div className="block mt-5">
          <p className={sp.primaryStyle}>
            Check out my
            <a
              href="https://www.linkedin.com/in/matias-nicolas-alvarez-842080157"
              style={{ color: sp.aquaColor }}
              target="_blank"
            >
              {" "}
              Linkedin
            </a>{" "}
            for further details.
          </p>
        </div>
      </div>
    </div>
  );
}
