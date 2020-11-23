import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date())
  }

  return (
    <div>{date.toLocaleTimeString('no')}</div>)
  ;
};

export default Clock;