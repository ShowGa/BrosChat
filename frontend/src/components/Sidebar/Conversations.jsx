import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Conversation from "./Conversation";
import UserService from "../../service/user-service";
import { getRandomEmoji } from "../../utils/emoji";

const Conversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  console.log(conversations);

  useEffect(() => {
    setLoading(true);
    UserService.getConversation()
      .then((res) => {
        setConversations(res.data);
      })
      .catch((e) => {
        const errMessage = e.response
          ? e.response.data.error
          : "Server Error! Connot get friend's chat !";
        toast.error(errMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, i) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex={i === conversations.length - 1}
            emoji={getRandomEmoji()}
          />
        );
      })}
      {loading && <span className="loading loading-spinner mx-auto"></span>}
    </div>
  );
};

export default Conversations;

// import React from "react";
// import Conversation from "./Conversation";

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default Conversations;
