# Take Home Assessment
## [LIVE LINK](https://chatbot-ndias.netlify.app/)

## User Instructions
If you would like to run this on your machine, I have hosted it on Netlify so no downloading necessary! If you want to look at my code, you can either look here on GitHub or you can look at the zip file I sent you. If you would like to run the code on your machine, make sure to run these commands:

`npm install`

AND THEN

`npm start`

## Objective
Your task is to implement a chat renderer!

You will receive a simluated message object via our mock API class. Your task is to take this message and render it in the main element in this file.

## Completion
This is a scaleable, mobile friendly, and cleanly designed chat bot that can technically be added to any site! Even though this was a simple challenge, I felt the need to really flex my skills by creating a scaleable chat bot rather than one that only sent the three messages. This bot has a demo test button to create new bot messages. I really hope you enjoy and I hope this solution satisfies! 

The instructions mentioned I was allowed to use a framework so I am using React and TailwindCSS to complete this project. The over achiever in me created a fake landing page with a fixed positioned chat box. Initially, you will have 3 unread messages which is shown with a number on the top right of the chat bubble.

<img src="./src/components/resources/chatbubble-demo.png" width="200" height="200" style="display:inline;" />

When you view the messages, they will be marked as read and that number will disappear. The three initial messages are from the given "API" and are styled to fit the given design reference. 

<img src="./src/components/resources/chatbox-demo.png" width="200" height="200" style="display:inline;" />

I also added an input field so the user can enter a command which the bot will respond to. When you click send, it will return a JS Promise which calls the function that responds to your request in a random amount of time, the chat box will have three dots to signify that the bot is thinking.

<img src="./src/components/resources/thinking-demo.png" width="200" height="200" style="display:inline;" />
