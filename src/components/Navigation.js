import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.styles.css';

const basicStyle = 'block py-1 px-1 m-5 text-red-100 text-4xl font-bold tracking-widest nav-selection transform ';
const selectedStyle = 'nav-selected'

const NavigationSections = [
    {
        id:1,
        name:'Home',
        path:'/',
        isExact:true,
        activeClassName:selectedStyle,
        className:basicStyle,
        image:<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    },
    {
        id:2,
        name:'Blog',
        path:'/post',
        isExact:true,
        activeClassName:selectedStyle,
        className:basicStyle,
        image:<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    },
    {
        id:3,
        name:'Projects',
        path:'/project',
        isExact:true,
        activeClassName:selectedStyle,
        className:basicStyle,
        image:<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
      </svg>
    },
    {
        id:4,
        name:'Contact',
        path:'/contact',
        isExact:true,
        activeClassName:selectedStyle,
        className:basicStyle,
        image:<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    {
        id:5,
        name:'Skills',
        path:'/skills',
        isExact:true,
        activeClassName:selectedStyle,
        className:basicStyle,
        image:<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    }
];

export default function Navigation (){ 
    return (
        <header className="bg-blackNavi z-50 w-auto md:p-2">
            <div className="container flex">
                <nav>
                <div className="md:flex m-auto">
                   {
                       
                       NavigationSections.map(sect =>(
                           <NavLink 
                            key={sect.id}
                            to={sect.path} 
                            exact={(sect.isExact)}
                            activeClassName={sect.activeClassName}
                            className={sect.className}
                           >
                               <div className="flex">
                                    <span className="hidden text-sm md:block lg:text-base">{sect.name}</span>
                                    <span className="m-auto md:ml-5">{sect.image}</span>
                               </div>
                           </NavLink>
                       ))
                       
                   }
                   </div>
                </nav>
            </div>
        </header>
    )
}