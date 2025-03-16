import React, { useState, useEffect } from "react";


function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let meridiem = "";

    if (!is24Hour) {
      meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
    }

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}${is24Hour ? "" : " " + meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white ">
      {/* Digital Clock Display */}
      <div className="w-175 rounded-lg shadow-glow bg-white/12  relative z-10 
      backdrop-blur-lg p-6 ">
        <span className="text-6xl font-serif md:text-8xl tracking-widest text-glow">
          {formatTime()}
        </span>
      </div>
        <div className="w-35 h-5  bg-purple-500 rounded-lg  absolute top-65 left-110 z-0" ></div>
        <div className="w-35 h-5  bg-purple-500 rounded-lg rounded-full absolute top-95 left-240 z-0" ></div>
        <div className="w-70 h-25 border-blue-600 border-15 rounded-full absolute top-75 left-150 z-0" ></div>

      {/* Control Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white  transition transform active:scale-80 active:bg-purple-500 rounded-lg italic md:not-italic ..."
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 backdrop-blur-lg transition transform active:scale-80 active:bg-purple-500 text-white rounded-lg"
          onClick={() => setIs24Hour(!is24Hour)}
        >
          Switch to {is24Hour ? "12-hour" : "24-hour"}
        </button>
      </div>
    </div>
    
  );
}

export default DigitalClock;
