import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navigation (){
    return (
        <header className="h-screen w-40 bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-white"
                        className="block items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
                    >
                        3Daygg
                    </NavLink>
                    <NavLink 
                        to="/post"
                        className="block items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project"
                        className="block items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
                    
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className="block items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
                    >
                        About Me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}