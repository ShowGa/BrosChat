import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  // for checking isMyMessage and get my profilePic
  const { authUser } = useAuthContext();
  // for getting receiver profilePic
  const { selectedConversation } = useConversation();
  const isMyMessage = message.senderId === authUser._id;
  const chatClassName = isMyMessage ? "chat-end" : "chat-start";
  const profilePic = isMyMessage
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = isMyMessage ? "bg-blue-500" : "bg-pink-500";
  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind css chat bubble component" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor}`}
        style={{ wordWrap: "break-word" }}
      >
        {message.message}
      </div>
      <div className="chat-footer text-white text-opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             src="https://i.postimg.cc/PxYDz4hD/Great-Download-Free-Png-Trollface-Png-Download-Png-Transparent-Troll-Face-Png-Png-Download-733x5.jpg"
//             alt="Tailwind css chat bubble component"
//           />
//         </div>
//       </div>
//       <div className="chat-bubble text-white bg-blue-500 truncate-10">hi</div>
//       <div className="chat-footer text-white text-opacity-50 text-xs flex gap-1 items-center">
//         12:40
//       </div>
//     </div>
//   );
// };

// export default Message;
