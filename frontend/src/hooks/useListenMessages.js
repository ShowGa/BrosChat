import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import fakSoundBoard from "../assets/soundBoard/editor3.mp3";
import dingSoundBoard from "../assets/soundBoard/ding.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  // zustand global state
  const { messages, setMessages } = useConversation();

  const newAudio = (message) => {
    if (message === "fuck" || message === "FUCK") {
      const sound = new Audio(fakSoundBoard);
      sound.volume = 0.5;
      sound.play();
      return;
    } else {
      const sound = new Audio(dingSoundBoard);
      sound.volume = 0.2;
      sound.play();
    }
  };

  useEffect(() => {
    // if there's socket then listening
    socket?.on("newMessage", (newMessage) => {
      // setMessages([...messages, newMessage]);
      newMessage.shouldShake = true;
      newAudio(newMessage.message);
      setMessages([...messages, newMessage]);
    });

    // when unmounted , stop listening to the socket
    return () => socket?.off("newMessage");
  }, [socket, messages]);
};
// add setMessages, messages

export default useListenMessages;
