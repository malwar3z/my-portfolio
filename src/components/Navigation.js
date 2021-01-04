import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navigation (){
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        3Daygg
                    </NavLink>
                    <NavLink to="/post">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About Me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}