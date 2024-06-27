"use client";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [muted, setMuted] = useState(false); // Initially not muted
  const [volume, setVolume] = useState(0.5); // Initial volume level
  const playerRef = useRef<ReactPlayer>(null);

  const handleTogglePlayPause = () => {
    setPlaying(!playing); // Toggle play state
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

  const handleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen
      if (playerRef.current) {
        (playerRef.current as any).wrapper?.requestFullscreen(); // Adjusted to access the wrapper for fullscreen
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleToggleMute = () => {
    setMuted(!muted);
    setVolume(muted ? 0.5 : volume); // Adjust volume based on mute state
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setMuted(newVolume === 0);

    // ReactPlayer handles volume directly through props
  };

  return (
    <div className={styles.player}>
      <ReactPlayer
        url="/p2b1azt1efyzb86kzpmm.mp4" // Replace with your local video path
        controls={false}
        width="100%"
        height="100%"
        ref={playerRef}
        muted={muted}
        volume={volume} // Pass volume state to ReactPlayer
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
        config={{
          file: {
            forceVideo: true, // Ensure using video format
          },
        }}
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
        <button className={styles.muteBtn} onClick={handleToggleMute}>
          {muted ? "Unmute" : "Mute"}
        </button>
        <input
          className={styles.volumeBar}
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
        <button className={styles.fullscreenBtn} onClick={handleFullscreen}>
          Fullscreen
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
