import { Typing } from '../messageComponents/typing';
import { Message } from '../messageComponents/message';
import React, { useEffect, useState } from "react";
import { About } from '../aboutComponent/About';
import { Landing } from '../landingComponents/Landing';
import { Nav } from '../navComponent/Nav';
import message from '../resources/message-icon.png';
import close from '../resources/close.png';
import bot from '../resources/ai.png'
import ChatApi from '../../chat-api';
import { randomStrings } from "../randomStrings";

export function Main() {
    //CHAT API OBJECT
    const chatApi = new ChatApi();

    //STATE VARIABLES
    const [expanded, setExpanded] = useState(true); //expanded variable
    const [loading, setLoading] = useState(false); //loading/typing variable
    const [messages, setMessages] = useState([]);//All messages
    const [unread, setUnred] = useState([]);//All unread messages

    //SETS READ/UNREAD VARIABLES
    useEffect(() => {
        if(expanded){
            setUnred(messages)
        }
        setLoading(false)
    }, [messages])

    //TOGGLES EXPAND
    const handleToggle = () => {
        setExpanded(!expanded)
        if(expanded){
            setUnred([])
        }
    }

    //CHOOSES RANDOM MESSAGE IN MY JAVASCRIPT FILE
    const chooseString = () => {
        setTimeout(() => {
            setMessages([{
                text: randomStrings[Math.floor(Math.random() * randomStrings.length)],
                timeSent: new Date().toLocaleString()
            }, ...messages])
        }, Math.floor(Math.random() * 5000));
    }

    //SETS MESSAGES USING GIVEN CHAT API
    useEffect(() => {
        var pendingMessages = chatApi.pendingMessages.map((item) => ({...item, timeSent: new Date().toLocaleString()}))
        pendingMessages.reverse()

        setMessages([...messages, ...pendingMessages])
    }, []);

    //ADDS NEW TEXT BY USING AN EXTERNAL FILE AND A PROMISE
    const handleAdd = async () => {
        setLoading(true)
        await new Promise(chooseString);
    }

    //BUBBLE OR THE EXPANDED CHAT BOX CSS VARIABLE
    const expandedCSS = expanded ? 'bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full border-2' : 'sm:w-[600px] sm:h-[700px] h-screen w-full bottom-0 right-0 sm:bottom-4 sm:right-4 fixed bg-white border-2 sm:rounded-md bg-gray-200'

    return (
        <div className='relative'>
            <Nav />
            <Landing />
            <About />
            <div className={expandedCSS}>
                {unread.length > 0 ?
                    <div className="position absolute top-2 right-2 bg-red-600 w-6 h-6 rounded-full pointer-events-none text-white grid place-items-center">
                        <p>{unread.length}</p>
                    </div>
                :
                null
                }

                {/* TOGGLE EXPAND BUTTON --- START */}
                {expanded ? 
                    <button onClick={handleToggle} className='w-full h-full  grid place-items-center'>
                        <img src={message} alt='chat indicator' className='w-3/5 pointer-events-none' />
                    </button>
                    :
                    <button onClick={handleToggle} className='mt-2 ml-2 w-4 h-4'>
                        <img className="w-full" src={close} alt='close chat box' />
                    </button>
                }
                {/* TOGGLE EXPAND BUTTON --- END */}

                {/* EXPANDED CONTENT --- START */}
                {!expanded && 
                <section className="px-2 py-2 h-[90%]">
                    <h2 className="text-center text-2xl font-semibold">Welcome to the Chat Bot</h2>

                    <div className="bg-white mt-4 h-[93%] w-full flex flex-col-reverse overflow-y-scroll" id='chat-box'>
                        {/* EACH MESSAGE */}
                        {loading && 
                            <Typing bot={bot} />
                        }
                        {messages.map((message, i) => (
                            <Message i={i} bot={bot} message={message} />
                        ))}
                        
                    </div>
                    <button onClick={handleAdd} className='bg-white p-2 rounded-lg mx-auto text-center'>
                        Create Fake Message
                    </button>
                </section>
                }
                {/* EXPANDED CONTENT --- END */}

            </div>
        </div>
    );
}
