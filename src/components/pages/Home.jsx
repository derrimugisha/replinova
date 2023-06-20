import React, { useEffect } from "react";
// import useReplinova from "../hooks/replinovaHook/useReplinova";
import useReplinovaRoot from "../hooks/replinovaHook/useReplinovaRoot";

const Home = () => {
  // const { replinova } = useReplinova();
  const root = useReplinovaRoot("/sw.js", "/");
  useEffect(() => {
    // replinova();
    root;
  }, []);
  return (
    <>
      {/* <header>
       
      </header> */}
      <header>
        <h1>Intro to Service Workers</h1>
        <h2>Integrating with IndexedDB</h2>
      </header>
      <main>
        <form id="colorForm" name="colorForm">
          <p>
            <label>Character Name</label>
            <input type="text" id="name" name="name" />
          </p>
          <p>
            <label>Favourite Colour</label>
            <input type="color" id="color" name="color" />
          </p>
          <p>
            <button id="btnSave">Save</button>
          </p>
        </form>
      </main>
    </>
  );
};

export default Home;
