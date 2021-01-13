import React from 'react';

export default function Contact (){

    function sendEmail() 
    {
        window.location = "mailto:alvarez.matias.n@gmail.com";
    }

    function chatWhatsapp()
    {
        const link ="https://wa.me/393454077208";
        window.location =link;
    }

    function checkInstagram(){
        const link="https://instagram.com/3daygg";
        window.location =link;
    }

    return (
        <div className="flex-grow mt-5 text-center">
             <p 
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-aqua mb-5"
                >
                <b>Contact</b>
            </p>
            <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-white italic mb-2">
                Feel free to reach out for<br/> any business inquiry.
            </h3>
            <button onClick={sendEmail}>
                <p className="m-3 p-3 rounded border-2 border-aqua text-sm md:text-lg lg:text-xl xl:text-2xl text-white italic">
                    Send an E-mail
                </p>
            </button>
            
            <button onClick={chatWhatsapp}>
                <p className="m-3 p-3 rounded border-2 border-aqua text-sm md:text-lg lg:text-xl xl:text-2xl text-white italic">
                    Chat through Whatsapp
                </p>
            </button>
            
            <button onClick={checkInstagram}>
                <p className="m-3 p-3 rounded border-2 border-aqua text-sm md:text-lg lg:text-xl xl:text-2xl text-white italic">
                    Follow me on Instagram
                </p>
            </button>

            <div className="mt-5">
                <svg className="m-auto" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
            </div>
            
        </div>
    );
}