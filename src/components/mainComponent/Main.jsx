import React, { useState } from "react";
import { About } from '../aboutComponent/About';
import { Landing } from '../landingComponents/Landing';
import { Nav } from '../navComponent/Nav';
import message from '../resources/message-icon.png';
import close from '../resources/close.png';
import bot from '../resources/ai.png'


export function Main() {
    const [expanded, setExpanded] = useState(false);
    const [messages, setMessages] = useState([{
            message: 'lorem ipsum text here',
            timeSent: 'Jul 12, 1:12 PM'
        }])

    const handleToggle = () => {
        setExpanded(!expanded)
    }

    const handleAdd = () => {
        setMessages([{
            message: 'lorem ipsum text here',
            timeSent: new Date().toLocaleString()
        }, ...messages])
    }

    const expandedCSS = expanded ? 'bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full border-2' : 'w-[600px] h-[700px] bottom-4 right-4 fixed bg-white border-2 rounded-md bg-gray-200'

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

                    <div className="bg-white mt-4 h-[93%] w-full flex flex-col-reverse overflow-y-scroll">
                        {/* EACH MESSAGE */}
                        {messages.map((message, i) => (
                            <div className="px-2 py-2" key={i}>
                                <div className="flex items-center mb-2">
                                    <img 
                                        src={bot}
                                        className='w-8 bg-gray-200 rounded-full p-[3px]'
                                        alt='bot profile'
                                    />
                                    <div className="bg-gray-300 w-fit h-fit px-4 py-2 rounded-md ml-2">
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">{message.timeSent}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAdd}>
                    Temp Add Button
                </button>
                </section>
                :
                null
                }
                {/* EXPANDED CONTENT --- END */}

            </div>
        </div>
    );
}
