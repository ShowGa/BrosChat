import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      // connect to backend socket.io if there is authUser and send userId
      const socket = io("http://localhost:8080", {
        query: {
          userId: authUser._id,
        },
      });
      // ???????????WTF is this?
      setSocket(socket);
      // (receive)get the onlineUser from backend side (io.emit) see who is online or off line and save in the OnlineUsers state(useState)
      // socket.on() is used to listen to the events. Can be used both client and server side.
      socket.on("getOnlineUsers", (user) => {
        setOnlineUsers(user);
      });
      // close the socket.io when component is unmounted

      return () => socket.close();
    } else {
      // close the socket.io when there's no authUser && socket existed
      if (socket) {
        socket.close();
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
