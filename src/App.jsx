

import React from 'react'
import SideBar from './Components/SideBar'
import Player from './Components/Player'
import Display from './Components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const { audioRef ,track} = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black ">
      {/* Top section: Sidebar + Display */}
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>

      {/* Bottom Player */}
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
