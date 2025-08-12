
import React from "react";
import { assets } from "../assets/assets.js";

const SideBar = () => {
  return (
    <div className="w-[25%] h-screen p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* Top 15% */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.home_icon} alt="" className="w-6 h-6" />
          <p className="font-semibold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer mt-2">
          <img src={assets.search_icon} alt="" className="w-6 h-6" />
          <p className="font-semibold">Search</p>
        </div>
      </div>
      {/* Bottom 85% */}
      <div className="bg-[#121212] h-[85%] rounded mt-2 flex flex-col">
        <div className="pt-10 pl-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="" className="w-6 h-6" />
            <p className="font-semibold">Your library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="" className="w-5 h-5" />
            <img src={assets.plus_icon} alt="" className="w-5 h-5" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">It is easy we will help you</p>
          <button className="px-3 py-2 bg-white rounded-full text-black pt-2 mt-2 cursor-pointer">Create Playlist</button>
        </div>
         <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Let's find podcast to follow</h1>
          <p className="font-light">We will keep you update on new episodes</p>
          <button className="px-3 py-2 bg-white rounded-full text-black pt-2 mt-2 cursor-pointer">Browse Podcast</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;