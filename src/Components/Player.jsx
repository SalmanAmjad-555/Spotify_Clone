

import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { track, seekBar, seekbg, playStatus, play, pause, time } =
    useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Track Info */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        {/* Buttons */}
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />

          {playStatus ? (
            <img
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
              onClick={pause}
            />
          ) : (
            <img
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
              onClick={play}
            />
          )}

          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-5 w-full">
          <p>
            {time.currentTime.minute}:{time.currentTime.sec}
          </p>
          <div
            ref={seekbg}
            className="w-[60vw] max-w-[500px] h-1 bg-gray-300 rounded-full cursor-pointer relative"
          >
            <div
              ref={seekBar}
              className="h-full bg-green-800 rounded-full transition-all duration-200 ease-linear min-w-[2px]"
              style={{ width: "0%" }}
            ></div>
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.sec}
          </p>
        </div>
      </div>

      {/* Extra Controls */}
      <div className="hidden lg:flex items-center gap-2 opacity-95">
        <img className="w-4" src={assets.plays_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
