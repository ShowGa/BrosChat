import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // clean up function
    return () => {
      setSelectedConversation(null);
    };
  }, []);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* <Header /> */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To :</span>{" "}
            <span className="text-gray-900 font-bold truncate max-w-[100px] ">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

// import React from "react";
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         {/* <Header /> */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To :</span>{" "}
//           <span className="text-gray-900 font-bold">Someone</span>
//         </div>

//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
