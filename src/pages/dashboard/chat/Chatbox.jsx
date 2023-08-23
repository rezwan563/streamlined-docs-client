const Chatbox = () => {
  return (
    <div className="md:h-3/4 md:w-1/2 md:my-auto md:mx-auto bg-white rounded-md relative">
      <div className="p-2">
        <input className="border-2 border-slate-200 px-2" type="text" placeholder="username" />
        <input className="border-2 border-slate-200 px-2" type="text" placeholder="room" />
        <button className="p-2 bg-slate-400">Join Room</button>
      </div>
      <div className="">
        Body
      </div>
      <div className="absolute bottom-0 w-full">
        <input className="px-2 py-1 w-3/4 border-2 border-slate-300 focus:outline-none text-md" type="text" placeholder="Type of Message" />
        <button className="px-4 py-1 bg-blue-400">Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
