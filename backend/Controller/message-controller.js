import Conversation from "../Models/conversation-model.js";
import Message from "../Models/message-model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    // find if there's conversation between you and your friend , if no then create one
    let foundConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!foundConversation) {
      foundConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    // push newMessage._id into conversation.message and save()
    // save new messages
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      foundConversation.message.push(newMessage._id);
    }
    // Optimize the code with Promise
    await Promise.all([newMessage.save(), foundConversation.save()]);
    // response
    return res.status(200).json(newMessage);
  } catch (e) {
    console.log("Error in sending message", e.message);
    return res.status(500).json({ error: "Internal server error !" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    // find the conversation between two people
    // get the message id in conversation collection and then find it in message collection to get message
    // Not reference but actual messages
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("message");
    const messages = conversation.message;

    return res.status(200).json(messages);
  } catch (e) {
    console.log("Error in geting message", e.message);
    return res.status(500).json({ error: "Internal server error !" });
  }
};
