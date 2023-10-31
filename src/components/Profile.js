import React from "react";
import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //APi call
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("useEffect");

    //break or unmount
    return () => {
      clearInterval(timer);
      console.log("Use Effect Return");
    };
  }, []);

  return (
    <div>
      <h2>Profile Class Comonent</h2>
      <h3>Name - {props.name} </h3>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
