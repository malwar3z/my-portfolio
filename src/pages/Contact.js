import React from 'react';

export default function Contact (){
    return (
        <div className="flex-grow mt-5">
            <h1 className="text-6xl mb-3 text-center" style={{ color:'#0dfdd2'}}>
               <b>Contacts</b> 
            </h1>
            <h3 className="text-sm text-white h-80 italic text-center">
                Feel free to reach out <br/> i do check my Emails on daily basis.
            </h3>
            <form>
                <label for="fname">Email subject:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="lname">Email body:</label>
                <input type="text" id="lname" name="lname"/>
            </form>
        </div>
    );
}