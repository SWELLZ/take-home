class ChatApi {
  static chatMessageDelay = 2500;
  pendingMessages = [
    {
      text: "Hello there! I'm your friendly neighborhood GameOn bot.",
    },
    {
      text: "Here is your curated list of the latest company news.",
      items: [
        {
          url: "https://www.nba.com/kings/news/sacramento-kings-relaunch-app-personalized-experiences-fans",
          thumbnailUrl:
            "https://www.nba.com/kings/sites/kings/files/apprelease.png?w=756&h=420",
          title:
            "Sacramento Kings Relaunch App with Personalized Experiences for Fans",
          cta: "Read more",
        },
        {
          url: "https://www.prnewswire.com/news-releases/philadelphia-76ers-score-a-new-chat-application-301442001.html",
          thumbnailUrl:
            "https://mma.prnewswire.com/media/1706983/7_6_CoS_rgb.jpg?w=500",
          title: "Philadelphia 76ers Score a New Chat Application",
          cta: "Read more",
        },
        {
          url: "https://www.prnewswire.com/news-releases/comedy-takes-center-stage-in-the-new-just-for-laughs-chat-experience-301340747.html",
          thumbnailUrl:
            "https://mma.prnewswire.com/media/1580994/GameOn_Just_For_Laughs.jpg?w=500",
          title:
            "Comedy Takes Center Stage in the New 'Just For Laughs' Chat Experience",
          cta: "Read more",
        },
        {
          url: "https://www.prnewswire.com/news-releases/clutchpoints-aims-to-expand-reach-through-new-partnership-with-gameon-technology-301327704.html",
          thumbnailUrl:
            "https://mma.prnewswire.com/media/1558678/ClutchPoints_logo_Logo.jpg?w=500",
          title:
            "ClutchPoints Aims to Expand Reach Through New Partnership with GameOn Technology",
          cta: "Read more",
        },
        {
          url: "https://www.prnewswire.com/news-releases/miami-fc-drives-new-community-engagement-through-partnership-with-gameon-technology-301309750.html",
          thumbnailUrl:
            "https://mma.prnewswire.com/media/1530093/MiamiFC.jpg?w=500",
          title:
            "Miami FC Drives New Community Engagement Through Partnership with GameOn Technology",
          cta: "Read more",
        },
        {
          url: "https://www.prnewswire.com/news-releases/gameon-and-atlanta-hawks-announce-new-partnership-in-the-world-of-chat-301194919.html",
          thumbnailUrl:
            "https://mma.prnewswire.com/media/1387956/hawks_logo_red_red.jpg?w=400",
          title:
            "GameOn And Atlanta Hawks Announce New Partnership In The World of Chat",
          cta: "Read more",
        },
      ],
    },
    {
      text: "Have a fantastic day!",
    },
  ];

  constructor(messageHandler) {
    this.messageHandler = messageHandler;
    this.queueSend();
  }

  queueSend(delay) {
    window.setTimeout(
      this.sendNextMessage.bind(this),
      ChatApi.chatMessageDelay
    );
  }

  sendNextMessage() {
    const message = this.pendingMessages.shift();
    if (message) {
      this.messageHandler({ ...message, timestamp: Date.now() });
      this.queueSend();
    }
  }
}

export default ChatApi