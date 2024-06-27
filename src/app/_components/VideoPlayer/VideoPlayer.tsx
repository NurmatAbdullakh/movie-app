"use client";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  const handleTogglePlayPause = () => {
    setPlaying(!playing); // Toggle play state

    if (playerRef.current) {
      if (playing) {
        playerRef.current.getInternalPlayer().pause();
      } else {
        playerRef.current.getInternalPlayer().play();
      }
    }
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    setPlayedSeconds(state.playedSeconds);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setPlayedSeconds(seekTime);

    if (playerRef.current) {
      playerRef.current.seekTo(seekTime);
    }
  };

  const formatDuration = (seconds: number) => {
    const mm = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const ss = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mm}:${ss}`;
  };

  return (
    <div className={styles.videoPlayer}>
      <ReactPlayer
        url="/p2b1azt1efyzb86kzpmm.mp4" // Replace with your local video path
        controls={false}
        width="100%"
        height="100%"
        ref={playerRef}
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className={styles.controls}>
        <button className={styles.playingBtn} onClick={handleTogglePlayPause}>
          {playing ? "Pause" : "Play"}
        </button>
        <input
          className={styles.progressbar}
          type="range"
          min={0}
          max={duration}
          value={playedSeconds}
          onChange={handleSeekChange}
        />
        <span className={styles.timeDisplay}>
          {formatDuration(playedSeconds)} / {formatDuration(duration)}
        </span>
      </div>
    </div>
  );
};

export default VideoPlayer;
