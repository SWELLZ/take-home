import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { randomStrings } from "../randomStrings";
import message from "../resources/message-icon.png";
import ChatApi from "../../chat-api";
import { Typing } from "./Typing";
import close from "../resources/close.png";
import bot from "../resources/ai.png";

export function ChatBubble() {
  //STATE VARIABLES
  const [expanded, setExpanded] = useState(true); //expanded variable
  const [loading, setLoading] = useState(false); //loading/typing variable
  const [messages, setMessages] = useState([]); //All messages
  const [unread, setUnred] = useState([]); //All unread messages
  const [userCommand, setUserCommand] = useState('');

  const commands = {
    help: `Here is a list of commands!\n
            'author' --- Gives you info on the creator of this bot\n
            'info' --- Gives you info on this site\n
            'dadJoke' --- Tells you a random dad joke!\n
            'flex' --- Generates a random message`,
    author: `Nehemiah Dias made this site!\n
            You can find his website at the bottom of this page. He is the best coder in the world!\n
            Visit his site and make contact!`,
    info: `This site is 100% fake and serves no purpose other than being a place for me to exist! (Me as in the bot)`,
    dadJoke: ["What do you call a factory that makes okay products? A satisfactory.",
        "Dear Math, grow up and solve your own problems.",
        "What did the janitor say when he jumped out of the closet? Supplies!",
        "Have you heard about the chocolate record player? It sounds pretty sweet.",
        "What did the ocean say to the beach? Nothing, it just waved.",
        "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels.",
        "I only know 25 letters of the alphabet. I don't know y.",
        "How does the moon cut his hair? Eclipse it.",
        "What did one wall say to the other? I'll meet you at the corner.",
        "What did the zero say to the eight? That belt looks good on you.",
        "A skeleton walks into a bar and says, 'Hey, bartender. I'll have one beer and a mop.'",
        "Where do fruits go on vacation? Pear-is!",
        "I asked my dog what's two minus two. He said nothing.",
        "What did Baby Corn say to Mama Corn? Where's Pop Corn?",
        "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
        "What does a sprinter eat before a race? Nothing, they fast!",
        "Where do you learn to make a banana split? Sundae school.",
        "What has more letters than the alphabet? The post office!",
        "Dad, did you get a haircut? No, I got them all cut!",
        "What do you call a poor Santa Claus? St. Nickel-less.",
        "I got carded at a liquor store, and my Blockbuster card accidentally fell out. The cashier said never mind.",
        "Where do boats go when they're sick? To the boat doc.",
        "I don't trust those trees. They seem kind of shady.",
        "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!",
        "How do you get a squirrel to like you? Act like a nut.",
        "Why don't eggs tell jokes? They'd crack each other up.",
        "I don't trust stairs. They're always up to something.",
        "What do you call someone with no body and no nose? Nobody knows.",
        "Did you hear the rumor about butter? Well, I'm not going to spread it!",
        "Why couldn't the bicycle stand up by itself? It was two tired.",
        "What did one hat say to the other? Stay here! I'm going on ahead.",
        "Why did Billy get fired from the banana factory? He kept throwing away the bent ones."
    ],
    flex: 'TEMP'
  }

  //CHAT API OBJECT
  const chatApi = new ChatApi();

  //SETS READ/UNREAD VARIABLES
  useEffect(() => {
    if (expanded) {
      setUnred(messages);
    }
    setLoading(false);
  }, [messages]);

  //TOGGLES EXPAND
  const handleToggle = () => {
    setExpanded(!expanded);
    if (expanded) {
      setUnred([]);
    }
  };

  const handleSendMessage = e => {
    e.preventDefault();
    if (Object.keys(commands).includes(userCommand)) {
        console.log(commands[userCommand]);
    }
  }

  //CHOOSES RANDOM MESSAGE IN MY JAVASCRIPT FILE
  const chooseString = () => {
    setTimeout(() => {
      setMessages([
        {
          text: randomStrings[Math.floor(Math.random() * randomStrings.length)],
          timeSent: new Date().toLocaleString(),
        },
        ...messages,
      ]);
    }, Math.floor(Math.random() * 5000));
  };

  //SETS MESSAGES USING GIVEN CHAT API
  useEffect(() => {
    var pendingMessages = chatApi.pendingMessages.map((item) => ({
      ...item,
      timeSent: new Date().toLocaleString(),
    }));
    pendingMessages.reverse();

    setMessages([...messages, ...pendingMessages]);
  }, []);

  //ADDS NEW TEXT BY USING AN EXTERNAL FILE AND A PROMISE
  const handleAdd = async () => {
    setLoading(true);
    await new Promise(chooseString);
  };

  //BUBBLE OR THE EXPANDED CHAT BOX CSS VARIABLE
  const expandedCSS = expanded
    ? "bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full border-2"
    : "sm:w-[600px] sm:h-[700px] h-screen w-full bottom-0 right-0 sm:bottom-4 sm:right-4 fixed bg-white border-2 sm:rounded-md bg-gray-200";

  return (
    <div className={expandedCSS}>
      {unread.length > 0 ? (
        <div className="position absolute top-2 right-2 bg-red-600 w-6 h-6 rounded-full pointer-events-none text-white grid place-items-center">
          <p>{unread.length}</p>
        </div>
      ) : null}

      {/* TOGGLE EXPAND BUTTON --- START */}
      {expanded ? (
        <button
          onClick={handleToggle}
          className="w-full h-full  grid place-items-center"
        >
          <img
            src={message}
            alt="chat indicator"
            className="w-3/5 pointer-events-none"
          />
        </button>
      ) : (
        <button onClick={handleToggle} className="mt-2 ml-2 w-4 h-4">
          <img className="w-full" src={close} alt="close chat box" />
        </button>
      )}
      {/* TOGGLE EXPAND BUTTON --- END */}

      {/* EXPANDED CONTENT --- START */}
      {!expanded && (
        <section className="px-2 py-2 h-[90%]">
          <h2 className="text-center text-2xl font-semibold">
            Welcome to the Chat Bot
          </h2>

          <div
            className="bg-white mt-4 h-[93%] w-full flex flex-col-reverse overflow-y-scroll"
            id="chat-box"
          >
            {/* EACH MESSAGE */}
            {loading && <Typing bot={bot} />}
            {messages.map((message, i) => (
              <Message i={i} bot={bot} message={message} />
            ))}
          </div>
          <div className="flex items-center mt-1">
            <form onSubmit={handleSendMessage}>
                <input 
                    type='text'
                    onChange={e => setUserCommand(e.target.value)}
                    value={userCommand}
                />
                <button
                    type='submit'
                >Send</button>
            </form>
          <button
            onClick={handleAdd}
            type='button'
            className="bg-white p-1 rounded-lg mx-auto text-center"
          >
            Create Fake Message
          </button>
          </div>
        </section>
      )}
      {/* EXPANDED CONTENT --- END */}
    </div>
  );
}
