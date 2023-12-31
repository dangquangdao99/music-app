import React, { useContext } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../context";

export default function Playing() {
  const { song, handleSetSong } = useContext(Songs);
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPre = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumbControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
}
