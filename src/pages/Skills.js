import React from 'react';
import { ResponsiveBubbleHtml } from '@nivo/circle-packing';
import * as sp from '../utils/styleProvider';


const root = 
{
"name": "nivo",
"color": sp.blackColor,
"children": [
                {
                "name": "JS",
                "color":  sp.aquaColor,
                "loc": 800000
                },
                {
                "name": "Html",
                "color": sp.aquaColor,
                "loc": 400000
                },
                {
                "name": "Css",
                "color": sp.aquaColor,
                "loc": 400000
                },
                {
                "name": "React",
                "color": sp.aquaColor,
                "loc": 300000
                },
                {
                "name": "Angular",
                "color": sp.aquaColor,
                "loc": 400000
                },
                {
                "name": "ASP.NET",
                "color": sp.aquaColor,
                "loc": 1000000
                },
                {
                    "name": "Sql",
                    "color": sp.aquaColor,
                    "loc": 500000
                },
                {
                "name": "Git",
                "color": sp.aquaColor,
                "loc": 300000
                },
                // {
                // "name": ".Net Core",
                // "color": aquaColor,
                // "loc": 450000
                // },
                {
                "name": "C#",
                "color": sp.aquaColor,
                "loc": 400000
                },
                {
                "name": "Java",
                "color": sp.aquaColor,
                "loc": 300000
                },
            ]
};

export default function Skills (){
    return (
            <div className="w-auto h-auto md:flex 2xl:block">
                {/* sm:inline-block md-flex */}
                <div className="text-center m-4">
                    <article>
                        <p 
                            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-aqua mb-5"
                            >
                            <b>Skillset</b>
                        </p>
                        <p 
                            className="sm:w-2 text-sm md:text-lg lg:text-xl xl:text-2xl text-white italic text-center"
                            >
                            Currently working as a Full-stack developer , I have been working in the IT world for 4+ Years.
                            <br/>  <br/>
                            Although labeled as a Full-Stack Dev I recently fell in love with the latest front-end frameworks , and I'm 
                            willing to completely master React and JS .
                            <br/> <br/>
                            Check out my 
                            <a href="https://www.linkedin.com/in/matias-nicolas-alvarez-842080157" style={{ color:sp.aquaColor}} target="_blank"> Linkedin</a> for further details.
                        </p>
                    </article>
                </div>
                <div 
                    className="w-72 h-72 md:w-100 md:h-100 m-auto " 
                    >
                        
                    <ResponsiveBubbleHtml
                        root={root}
                        identity="name"
                        value="loc"
                        colors={ c => c.color}
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
    );
}