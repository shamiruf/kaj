import React from "react";
import audio from "../audio/Money2.mp3";

const Audio = () => {
  const playAudio = () => {
    let audioEl = document.getElementsByClassName("audio-element")[0];
    if (audioEl) {
      audioEl.play();
    }
  };

  return (
    <div className="audio-div ">
      <button
        onClick={() => {
          playAudio();
        }}
      ></button>
      <audio controls className="audio-element">
        <source src={audio} type="audio/mp3"></source>
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default Audio;
