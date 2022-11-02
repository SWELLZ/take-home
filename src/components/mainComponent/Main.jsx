import React from "react";
import { About } from '../aboutComponent/About';
import { Landing } from '../landingComponents/Landing';
import { Nav } from '../navComponent/Nav';
import message from '../resources/message-icon.png';


export function Main() {
    return (
        <div className='relative'>
            <Nav />
            <Landing />
            <About />
            <button className='bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full grid place-items-center border-2'>
                <img src={message} alt='chat indicator' className='w-3/5' />
            </button>
        </div>
    );
}
