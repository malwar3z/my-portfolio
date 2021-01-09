import React from 'react';
import { ResponsiveBubbleHtml } from '@nivo/circle-packing';

const blackColor = '#1a1a1a';
const aquaColor = '#0dfdd2';
const root = 
{
"name": "nivo",
"color": blackColor,
"children": [
                {
                "name": "JS",
                "color":  aquaColor,
                "loc": 500000
                },
                {
                "name": "HTML",
                "color": aquaColor,
                "loc": 400000
                },
                {
                "name": "CSS",
                "color": aquaColor,
                "loc": 200000
                },
                {
                "name": "React",
                "color": aquaColor,
                "loc": 500000
                },
                {
                "name": "Angular",
                "color": aquaColor,
                "loc": 300000
                },
                {
                "name": " .NET Webforms ",
                "color": aquaColor,
                "loc": 2000000
                },
                {
                    "name": "Sql",
                    "color": aquaColor,
                    "loc": 500000
                },
                {
                "name": "Git",
                "color": aquaColor,
                "loc": 80000
                },
                {
                "name": ".NET CORE",
                "color": aquaColor,
                "loc": 450000
                },
                {
                "name": "C#",
                "color": aquaColor,
                "loc": 100000
                },
                {
                "name": "Java",
                "color": aquaColor,
                "loc": 100000
                },
            ]
}
;

export default function Skills (){
    return (
        <div className="ml-5 mt-10 mb-auto">
            <div className="inline-flex">
                <div className="flex-none w-52 sm:w-52 md:w-1/3  m-5">
                    <article>
                        <p className="text-6xl mb-3" style={{ color:'#0dfdd2'}}>
                            <b>My <br/> SKILLSET</b>
                        </p>
                        <p className="text-sm text-white h-80 italic" style={{overflow:'auto'}}>
                            I have been working for 4 years as a Full-stack developer , on both Client and Server side.
                            <br/>  <br/>
                            Although i'm labeled as Full-Stack i recently fell in love with the latest front-end frameworks , and i'm 
                            willing to completely master React and JS , currently working on some personal projects that i'll soon be sharing 
                            on this website.
                            <br/>  <br/>
                            You can check out all the technologies i've used throughout my Dev career on the graph aside.
                            {/* <br/>  <br/>
                            I'm really close to hit the 5 year
                            milestone as a Developer , there's still so much to learn that i can't help not to still consider myself as a Beginner. */}
                            <br/> <br/>
                            Check out my 
                            <a href="https://www.linkedin.com/in/matias-nicolas-alvarez-842080157" style={{ color:'#0dfdd2'}} target="_blank"> Linkedin</a>
                        </p>
                    </article>
                </div>
                <div 
                    className="hidden w-2/3 md:flex" 
                    style={{height:400, width:400}}>
                        
                    <ResponsiveBubbleHtml
                        root={root}
                        identity="name"
                        value="loc"
                        colors={ c => c.color}
                        // colors={{ scheme: 'nivo' }}
                        // borderColor="#0dfdd2"
                        labelTextColor={blackColor}
                        labelSkipRadius={10}
                        // labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                        // borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={12}
                        isZoomable={false}
                        isInteractive={false}
                    />
                </div>
            </div>
        </div>
    );
}