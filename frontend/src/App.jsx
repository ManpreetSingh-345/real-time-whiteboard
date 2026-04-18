import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="font-sora">
      <header className="flex justify-between p-7 fixed top-0 right-0 left-0">
        <div className="text-3xl">WhiteBoard</div>
        <div className="flex gap-3">
          <button className="hover:cursor-pointer underline underline-offset-4">
            Features
          </button>
          <button className="hover:cursor-pointer">Pricing</button>
          <button className="hover:cursor-pointer">Blog</button>
          <button className="hover:cursor-pointer">Resources</button>
        </div>
        <div className="flex gap-3">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </header>
      <main className="h-screen flex flex-col gap-3 justify-center items-center bg-radial-[at_50%_75%] from-70% from-[#D7DEDC] to-[#9A879D]">
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
