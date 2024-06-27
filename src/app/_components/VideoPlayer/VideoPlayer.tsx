"use client";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(true);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  const handleTogglePlayPause = () => {
    if (playerRef.current) {
      if (playing) {
        playerRef.current.getInternalPlayer().pauseVideo();
      } else {
        playerRef.current.getInternalPlayer().playVideo();
      }
      setPlaying(!playing);
    }
  };

  const handleProgress = (state: { playedSeconds: number; played: number }) => {
    setPlayedSeconds(state.playedSeconds);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (playerRef.current) {
      playerRef.current.seekTo(seekTime);
      setPlayedSeconds(seekTime);
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
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=U8XH3W0cMss"
        controls={false}
        width="100%"
        height="100%"
        ref={playerRef}
        muted={true}
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className={styles.controls}>
        <button
          className={styles["playing-btn"]}
          onClick={handleTogglePlayPause}
        >
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
        <span style={{ marginLeft: "10px" }}>
          {formatDuration(playedSeconds)} / {formatDuration(duration)}
        </span>
      </div>
    </div>
  );
};

export default VideoPlayer;
