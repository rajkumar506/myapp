import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [stop, setStop] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let interval = null;
    if (stop) {
      interval = setInterval(() => {
        if (seconds < 60) {
          setSeconds(seconds + 1);
        }
        if (seconds >= 60) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
        if (minutes >= 60) {
          setMinutes(0);
          setHour(hour + 1);
        }
        clearInterval(interval);
      }, 1000);
    } else {
      return () => clearInterval(interval);
    }
  }, [stop, seconds, minutes, hour]);

  const handleStart = () => {
    setStop(true);
  };

  const handleStop = () => {
    setStop(false);
    setSeconds(0);
    setHour(0);
    setMinutes(0);

    setTime(hour + " H : " + minutes + " M : " + seconds + " S : ");
    setShow(false);
  };

  return (
    <>
      {show ? (
        <>
          <button
            onClick={() => {
              handleStart();
            }}
          >
            start
          </button>
          <button
            onClick={() => {
              handleStop();
            }}
          >
            stop
          </button>
        </>
      ) : null}
      <div>
        {hour < 10 ? "0" + hour : hour}:{minutes < 10 ? "0" + minutes : minutes}
        :{seconds < 10 ? "0" + seconds : seconds}
      </div>

      <div>{time}</div>
    </>
  );
};
