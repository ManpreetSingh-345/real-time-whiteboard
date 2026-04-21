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
      <section className="flex flex-col py-20 gap-2 bg-radial-[at_50%_25%] from-70% from-[#D7DEDC] to-[#9A879D]">
        <div className="flex justify-center flex-col items-center py-20 gap-2">
          <h1 className="text-3xl font-bold">
            A Collaborative Approach to Brain Storming
          </h1>
          <p>
            Work together with others in a high-performance, smooth environment
          </p>
        </div>
        <div className="py-20 grid grid-cols-3 items-center place-items-center text-center text-wrap">
          <div>
            <p className="font-bold">Real time collaboration</p>
            <p>Work with others real time in a collaborative environment</p>
          </div>
          <div>
            <p className="font-bold">Excellent User Experience (UI/UX)</p>
            <p>Experience high-performance user experience</p>
          </div>
          <div>
            <p className="font-bold">Advanced AI Capabilities</p>
            <p>
              Utilize AI to its fullest potential in a configured environment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
