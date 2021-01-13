import React from 'react';

export default function Project (){
    return(
      <div className="flex-grow mt-5 text-center">
        <p 
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-aqua mb-5"
            >
            <b>Projects</b>
        </p>
        <div className="flex text-white">
          <div className="border-2 border-aqua">
            TiDieto
          </div>
          <div className="border-2 border-aqua">
            DogLocator
          </div>
        </div>
      </div>
    );
}