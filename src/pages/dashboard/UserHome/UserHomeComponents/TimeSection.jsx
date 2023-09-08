import { useState, useEffect } from "react";

function TimeSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h4 className="text-base font-semibold mb-2">Bangladesh Standard Time</h4>
      <div className="flex items-center justify-center space-x-2 text-4xl font-bold">
        <span className="animate-bounce">{formattedHours}</span>
        <span>:</span>
        <span className="animate-bounce">{minutes}</span>
        <span>:</span>
        <span className="animate-bounce">{seconds}</span>
        <span>{ampm}</span>
      </div>
    </div>
  );
}

export default TimeSection;
