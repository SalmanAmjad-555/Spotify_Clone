

import { createContext, useContext, useEffect, useRef, useState } from "react";
import React from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext(); // <-- add parentheses

const PlayerContextProvider = (props) => {
    const audioRef=useRef()
    const seekBar=useRef()
    const seekbg=useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            sec:0,
            minute:0
        },
      totalTime:{
            sec:0,
            minute:0
        }
        
    })

    useEffect(() => {
      setTimeout(() => {
        audioRef.current.ontimeupdate=()=>{
            if (audioRef.current.duration > 0) {
  seekBar.current.style.width =
    Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
}

            setTime({
                currentTime:{
                    sec:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60)
                },
                totalTime:{
                    sec:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60)
                }
            })
        }

      }, 1000);
    
      
    }, [])
    

    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const contextValue = {
        audioRef,
        seekBar,
        seekbg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
