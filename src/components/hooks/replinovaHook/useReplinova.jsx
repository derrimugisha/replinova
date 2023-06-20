import { useState, useEffect } from "react";

const useReplinova = () => {
  const [name, setName] = useState("this is replinova");
  //   useEffect(() => {
  //     console.log("This is the replinova:::", name);
  //   }, []);
  const replinova = () => {
    console.log("This is the replinova:::", name);
  };

  return { replinova };
};
export default useReplinova;
