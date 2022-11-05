import { ChatBubble } from "../messageComponents/ChatBubble";
import React from "react";
import { About } from "../aboutComponent/About";
import { Landing } from "../landingComponents/Landing";
import { Nav } from "../navComponent/Nav";

import Footer from "../footerComponent/Footer";

export function Main() {
  return (
    <div className="relative">
      <Nav />
      <Landing />
      <About />
      <ChatBubble />
      <Footer />
    </div>
  );
}
