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
    const chatApi = new ChatApi();

    const [expanded, setExpanded] = useState(true);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([])
    const [unread, setUnred] = useState([]);

    useEffect(() => {
        if(expanded){
            setUnred(messages)
        }
        setLoading(false)
    }, [messages])

    const handleToggle = () => {
        setExpanded(!expanded)
        if(expanded){
            setUnred([])
        }
    }

    const chooseString = () => {
        setTimeout(() => {
            setMessages([{
                text: randomStrings[Math.floor(Math.random() * randomStrings.length)],
                timeSent: new Date().toLocaleString()
            }, ...messages])
        }, Math.floor(Math.random() * 5000));
    }

    useEffect(() => {
        var pendingMessages = chatApi.pendingMessages.map((item) => ({...item, timeSent: new Date().toLocaleString()}))
        pendingMessages.reverse()

        setMessages([...messages, ...pendingMessages])
    }, []);

    const handleAdd = async () => {
        setLoading(true)
        await new Promise(chooseString);
    }

    const expandedCSS = expanded ? 'bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full border-2' : 'w-[600px] h-[700px] bottom-4 right-4 fixed bg-white border-2 rounded-md bg-gray-200'

    return (
        <div className='relative'>
            <Nav />
            <Landing />
            <About />
            <div className={expandedCSS}>
                {unread.length > 0 ?
                    <div className="position absolute top-2 right-2 bg-red-600 w-6 h-6 rounded-full text-white grid place-items-center">
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
                {!expanded ? 
                <section className="px-2 py-2 h-[90%]">
                    <h2 className="text-center text-2xl font-semibold">Welcome to the Chat Bot</h2>

                    <div className="bg-white mt-4 h-[93%] w-full flex flex-col-reverse overflow-y-scroll">
                        {/* EACH MESSAGE */}
                        {loading ? 
                        <div className="px-2 py-2">
                            <div className="flex items-center">
                                <img 
                                    src={bot}
                                    className='w-8 bg-gray-200 rounded-full p-[3px]'
                                    alt='bot profile'
                                    loading="lazy"
                                />
                                <div className="bg-gray-300 w-fit h-fit px-[12px] py-2 rounded-md ml-2">
                                    <p>. . .</p>
                                </div>
                            </div>
                        </div>
                        :
                        null
                        }
                        {messages.map((message, i) => (
                            <div className="px-2 py-2" key={i}>
                                <div className="mb-2">
                                    <div className="flex items-center">
                                    <img 
                                        src={bot}
                                        className='w-8 bg-gray-200 rounded-full p-[3px]'
                                        alt='bot profile'
                                        loading="lazy"
                                    />
                                    <div className="bg-gray-300 w-fit h-fit px-[12px] py-2 rounded-md ml-2">
                                        <p>{message.text}</p>
                                    </div>
                                    </div>
                                    {message.items ? 
                                    <div className="flex gap-4 mt-2 ml-2">
                                    {message.items.map(item => {
                                        console.log(item.thumbnailUrl)
                                        return (
                                        <div className="bg-gray-300 rounded-lg min-w-[200px] flex flex-col">
                                            <img
                                                src={item.thumbnailUrl}
                                                className='w-full h-[112px] rounded-tr-lg rounded-tl-lg pointer-events-none bg-cover object-contain bg-white'
                                                alt={item.title}
                                            />
                                            <p className="font-bold mt-2 mb-[10px] px-[12px]">{item.title}</p>
                                            <div className="px-[12px] mb-[12px] mt-auto w-full flex">
                                            <a 
                                                href={item.url} 
                                                target="__blank" 
                                                rel='noreferrer' 
                                                className="bg-white font-bold min-w-full rounded-lg text-center shadow hover:bg-gray-100 active:shadow-none"
                                            >
                                                Learn More
                                            </a>
                                            </div>
                                        </div>
                                        )
                                    })}
                                    </div>
                                    :
                                    null
                                    }
                                </div>
                                <p className="text-xs text-gray-500">{message.timeSent}</p>
                            </div>
                        ))}
                        
                    </div>
                    <button onClick={handleAdd} className='bg-white p-2 rounded-lg mx-auto text-center'>
                        Create Fake Message
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
