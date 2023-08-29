import { AiOutlineSend } from "react-icons/ai"
const ChatBox = () => {
  return (
    <div className="w-full  bg-white rounded-lg px-1 md:px-2 shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Chat with Support</h2>
      </div>
      <div className="p-4 h-56 overflow-y-auto">
        <div className="flex flex-col space-y-2">
          <div className="flex items-start space-x-2">
            <img
              src="https://i.ibb.co/R4wcyR4/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" // Add your image source here
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="bg-gray-200 rounded-lg p-2">
                {/* sender message */}
                <p>Hey, I need help with my account.</p>
              </div>
              <span>
                {/* sender message time */}
                <small>08: 32 pm</small>
              </span>
            </div>
          </div>
          <div className="flex items-start justify-end space-x-2">
            <div>
            <div className="bg-blue-600 text-white rounded-lg p-2">
              {/* Self Message */}
              <p>Sure, I'm here to assist you.</p>
            </div>
            {/* selft message time */}
            <span><small>08: 33 pm</small></span>
            </div>
            <img
              src="https://i.ibb.co/c6CMxHv/portrait-photography-neutral-background-1.jpg" // Add your image source here
              alt="Support Avatar"
              className="w-8 h-8 rounded-full"
            />
            
          </div>
        </div>
      </div>
      <div className="p-4 border-t flex items-center gap-2 border-gray-300">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-4/5 border border-gray-300 rounded-md px-3 py-2 outline-none"
        />
        <button className=" bg-blue-600 text-white  rounded-md px-3 py-2">
          <AiOutlineSend/>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
