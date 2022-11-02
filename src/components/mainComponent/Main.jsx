import React, { useState } from "react";
import { About } from '../aboutComponent/About';
import { Landing } from '../landingComponents/Landing';
import { Nav } from '../navComponent/Nav';
import message from '../resources/message-icon.png';
import close from '../resources/close.png'


export function Main() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded)
    }

    const expandedCSS = expanded ? 'bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full border-2' : 'w-[400px] h-[500px] bottom-4 right-4 fixed bg-white border-2 rounded-md bg-gray-200'

    return (
        <div className='relative'>
            <Nav />
            <Landing />
            <About />
            <div className={expandedCSS}>

                {/* TOGGLE EXPAND BUTTON --- START */}
                {expanded ? 
                    <button onClick={handleToggle} className='w-full h-full  grid place-items-center'>
                        <img src={message} alt='chat indicator' className='w-3/5 pointer-events-none' />
                    </button>
                    :
                    <button onClick={handleToggle} className='mt-2 ml-2 w-4 h-4'>
                        <img className="w-full" src={close} />
                    </button>
                }
                {/* TOGGLE EXPAND BUTTON --- END */}

                {/* EXPANDED CONTENT --- START */}
                {!expanded ? 
                <section className="px-2 py-2 h-[90%]">
                    <h2 className="text-center text-lg font-semibold">Welcome to the Chat Bot</h2>

                    <div className="bg-white mt-4 h-[93%] w-full flex flex-col-reverse">
                        {/* EACH MESSAGE */}
                        <div className="px-2 py-2">
                            <div className="bg-gray-300 w-fit h-fit px-4 py-2 rounded-md ml-2 mb-2">
                                <p>asdf</p>
                            </div>
                            <p className="text-xs text-gray-500">Thu 12, 1:47 PM</p>
                        </div>
                    </div>

                </section>
                :
                null
                }
                {/* EXPANDED CONTENT --- END */}


            </div>
        </div>
    );
}
