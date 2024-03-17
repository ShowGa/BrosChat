import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import MessageService from "../../service/message-service";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState({ message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if there's message
    if (!inputMessage.message) return;

    MessageService.sendMessage(selectedConversation._id, inputMessage)
      .then((res) => {
        const { data } = res;
        setMessages([...messages, data]);
        // refresh the input after sending
        setInputMessage({ message: "" });
      })
      .catch((e) => {
        const errMessage = e.response
          ? e.response.data.error
          : "Server Error! Message sending failure !";
        toast.error(errMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (e) => {
    setInputMessage({
      message: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          onKeyDown={(e) => {
            e.onKeyDown === "Enter" && handleSubmit;
          }}
          onChange={handleChange}
          value={inputMessage.message}
          type="text"
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 hover:text-white"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// import React from "react";
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//           placeholder="Send a message"
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 end-0 flex items-center pe-3"
//         >
//           <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
