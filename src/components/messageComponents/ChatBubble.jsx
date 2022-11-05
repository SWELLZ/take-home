import React, { useEffect, useState } from "react";
import { Message } from "./message";
import { randomStrings } from "../randomStrings";
import message from "../resources/message-icon.png";
import ChatApi from "../../chat-api";
import close from "../resources/close.png";
import bot from "../resources/ai.png";
import user from "../resources/user-png.png";
import { Typing } from "./typing";

export function ChatBubble() {
  //STATE VARIABLES
  const [expanded, setExpanded] = useState(true); //expanded variable
  const [loading, setLoading] = useState(false); //loading/typing variable
  const [messages, setMessages] = useState([]); //All messages
  const [unread, setUnred] = useState([]); //All unread messages
  const [userCommand, setUserCommand] = useState(""); //User inputted command

  //OBJECT OF ALL COMMANDS
  const commands = {
    help: `Here is a list of commands!\n
            'author' --- Gives you info on the creator of this bot\n
            'info' --- Gives you info on this site\n
            'dadJoke' --- Tells you a random dad joke!\n
            'flex' --- Generates a random message generated from Random.org`,
    author: `Nehemiah Dias made this site!\n
            You can find his website at the bottom of this page. He is the best coder in the world!\n
            Visit his site and make contact!`,
    info: `This site is 100% fake and serves no purpose other than being a place for me to exist! (Me as in the bot)`,
    dadJoke: [
      "What do you call a factory that makes okay products? A satisfactory.",
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
      "Why did Billy get fired from the banana factory? He kept throwing away the bent ones.",
    ],
    flex: "",
  };

  //CHAT API OBJECT
  const chatApi = new ChatApi();

  //SETS READ/UNREAD VARIABLES
  useEffect(() => {
    if (expanded) {
      setUnred(messages);
    }
    setLoading(false);
    // eslint-disable-next-line
  }, [messages]);

  //TOGGLES EXPAND
  const handleToggle = () => {
    setExpanded(!expanded);
    if (expanded) {
      setUnred([]);
    }
  };

  //DETERMINES THE BOTS RESPONSE BASED ON INPUT
  const botResponse = (time) => {
    setTimeout(() => {
      //Randomizes time to generate message
      let botResponse = "";

      //loops through keys of known commands to check if user entered a command
      if (Object.keys(commands).includes(userCommand)) {
        if (userCommand === "dadJoke") {
          //Handles dad joke command
          botResponse =
            commands[userCommand][
              Math.floor(Math.random() * commands[userCommand].length)
            ];
        } else if (userCommand === "flex") {
          //Handles flex command
          botResponse =
            randomStrings[Math.floor(Math.random() * randomStrings.length)];
        } else {
          //Returns corresponding value to the inputted key
          botResponse = commands[userCommand];
        }
      } else {
        //If the command doesn't exist
        botResponse = "That command doesn't exist :(\nTry typing 'help'";
      }
      setMessages([
        //BOTS RESPONSE
        {
          text: botResponse,
          timeSent: new Date().toLocaleString(),
        },
        //USERS MESSAGE
        {
          text: userCommand,
          timeSent: time,
          sentByUser: true,
        },
        ...messages,
      ]);
    }, [Math.random() * 5000]);
  };

  //SENDS MESSAGE FROM USER AND USES THAT MESSAGE TO GET A BOT RESPONSE
  const handleSendMessage = async (e) => {
    e.preventDefault();

    //sets current time to a variable
    let time = new Date().toLocaleString();

    //appends users message to messages
    await setMessages([
      {
        text: userCommand,
        timeSent: time,
        sentByUser: true,
      },
      ...messages,
    ]);
    setUserCommand(""); //resets input field

    //HANDLES SIMULATED THINKING
    setLoading(true);
    await new Promise(botResponse(time));
  };

  //SETS MESSAGES USING GIVEN CHAT API
  useEffect(() => {
    var pendingMessages = chatApi.pendingMessages.map((item) => ({
      ...item,
      timeSent: new Date().toLocaleString(),
    }));
    pendingMessages.reverse();

    setMessages([...messages, ...pendingMessages]);
    // eslint-disable-next-line
  }, []);

  //BUBBLE OR THE EXPANDED CHAT BOX CSS VARIABLE
  const expandedCSS = expanded
    ? "bottom-4 right-4 fixed bg-white w-24 h-24 rounded-full border-2"
    : "sm:w-[600px] sm:h-[700px] h-full w-full bottom-0 right-0 sm:bottom-4 sm:right-4 fixed bg-white border-2 sm:rounded-md bg-gray-200";

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
            className="bg-white mt-4 h-[90%] w-full flex flex-col-reverse overflow-y-scroll"
            id="chat-box"
          >
            {/* EACH MESSAGE */}
            {loading && <Typing bot={bot} />}
            {messages.map((message, i) => (
              <Message i={i} bot={bot} user={user} message={message} />
            ))}
          </div>
          <div className="flex items-center h-[10%]">
            <form
              className="flex gap-2 w-full justify-between items-center"
              onSubmit={handleSendMessage}
            >
              <input
                type="text"
                className="rounded-md ml-4 border border-transparent outline-none px-2 py-1 w-1/2 shadow focus:border-blue-500 focus:border"
                placeholder="Command (try 'help')... "
                onChange={(e) => setUserCommand(e.target.value)}
                value={userCommand}
                required
              />
              <button
                type="submit"
                className="bg-blue-500 py-1 mr-4 text-white px-6 rounded-full hover:bg-blue-600 shadow"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      )}
      {/* EXPANDED CONTENT --- END */}
    </div>
  );
}
