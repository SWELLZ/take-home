import React, { useState } from "react";
import { About } from '../aboutComponent/About';
import { Landing } from '../landingComponents/Landing';
import { Nav } from '../navComponent/Nav';
import message from '../resources/message-icon.png';


export function Main() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded)
    }

    const expandedCSS = expanded ? 'bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full border-2' : 'w-[400px] h-[500px] bottom-4 right-4 fixed bg-white border-2 rounded-md'

    return (
        <div className='relative'>
            <Nav />
            <Landing />
            <About />
            <div>
                <div className={expandedCSS}>
                    {/* TOGGLE EXPAND BUTTON --- START */}
                    {expanded ? 
                        <button onClick={handleToggle} className='w-full h-full  grid place-items-center'>
                            <img src={message} alt='chat indicator' className='w-3/5 pointer-events-none' />
                        </button>
                        :
                        <button onClick={handleToggle} className='w-4 h-4 bg-black'>

                        </button>
                    }
                    {/* TOGGLE EXPAND BUTTON --- END */}
                </div>
            </div>
        </div>
    );
}
