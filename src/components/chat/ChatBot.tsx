import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to the Ethiopia Science Museum Chatbot! Here you can learn about our exhibits, events, and more. How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsWriting(true);

    try {
      const response = await axios.post("http://localhost:5001/api/chat", {
        message: input,
      });
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.data.reply,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 429
      ) {
        alert(
          "You have exceeded your quota. Please check your Gemini plan and billing details."
        );
      } else {
        alert("Error communicating with the server. Please try again later.");
      }
    } finally {
      setIsWriting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:from-orange-600 hover:via-pink-600 hover:to-blue-600 transition-colors animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Museum Assistant
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isWriting && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
                  The assistant is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border dark:border-gray-600 rounded-lg 
                  bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
