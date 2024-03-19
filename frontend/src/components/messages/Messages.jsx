import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import useConversation from "../../zustand/useConversation";
import MessageService from "../../service/message-service";
import toast from "react-hot-toast";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  useListenMessages(); // Listen for incoming newMessage from socket
  const lastMessageRef = useRef();
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const getMessages = () => {
    setLoading(true);
    MessageService.getMessage(selectedConversation._id)
      .then((res) => {
        const { data } = res;
        setMessages(data);
      })
      .catch((e) => {
        const errMessage = e.response
          ? e.response.data.error
          : "Server Error! Message getting failure !";
        toast.error(errMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMessages();
  }, [selectedConversation]);
  // auto scroll to the last message
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
        })}
      {loading ? [...Array(3)].map((_, i) => <MessageSkeleton key={i} />) : ""}
      {!loading && messages.length === 0 && (
        <p className="text-gray-400 text-center">Friendship start at here !</p>
      )}
    </div>
  );
};

export default Messages;

// import React from "react";
// import Message from "./Message";

// const Messages = () => {
//   return (
//     <div className="p-4 flex-1 overflow-auto">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// };

// export default Messages;
