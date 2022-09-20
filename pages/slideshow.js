import Link from "next/link";
import { useEffect, useState } from "react";
import { useChannel } from "../hooks/AblyReactEffect";

export default function SlideShowPage() {
  const decks = [
    "Welcome",
    "This is a slideshow",
    "I hope you enjoy it",
    "Isn't it fun!",
    "The end"
  ];
  const [name, setName] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);

  const [channel, ably] = useChannel("current-slide", (message) => {
    // Here we're computing the state that'll be drawn into the message history
    // We do that by slicing the last 199 messages from the receivedMessages buffer

    console.log(message);
    setSlideIndex(parseInt(message.data));

    // Then finally, we take the message history, and combine it with the new message
    // This means we'll always have up to 199 message + 1 new message, stored using the
    // setMessages react useState hook
  });

  const nextSlide = () => {
    if (slideIndex >= decks.length - 1) return;

    channel.publish({ name: "update-slide", data: `${slideIndex + 1}` });
    setSlideIndex(slideIndex + 1);
  };

  const previousSlide = () => {
    if (slideIndex === 0) return;

    channel.publish({ name: "update-slide", data: `${slideIndex - 1}` });
    setSlideIndex(slideIndex - 1);
  };

  return (
    <div>
      {name === "" ? <p>Hello World.</p> : <p>Hello {name}</p>}
      <div>{decks[slideIndex]}</div>
      <div>
        <button onClick={previousSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}
