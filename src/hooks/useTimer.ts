import { useEffect, useState } from "react";

export const useTimer = () => {
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return { seconds, setSeconds, formatTime };
};
