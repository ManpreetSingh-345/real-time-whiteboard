import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="font-poiret">
      <main className="h-screen flex flex-col gap-3 justify-center items-center bg-linear-to-r from-70% from-white to-[#D6B588]">
        <div className="text-4xl">Welcome to the White Board</div>
        <p className="text-2xl">Where ideas meet reality</p>
        <button className="border rounded-2xl px-5 py-2 hover:cursor-pointer hover:bg-black hover:text-white duration-300">
          Join WhiteBoard Now
        </button>
      </main>
    </div>
  );
}

export default App;
