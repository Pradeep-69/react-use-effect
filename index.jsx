import { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    document.title = time.toLocaleTimeString();
  }, [time]);

  
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Current Time</h1>
      <p>{formattedTime}</p>
    </div>
  );
}

export default Time;
