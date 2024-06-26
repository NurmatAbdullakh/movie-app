"use client";
import { ChangeEvent, useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.scss";
import Image from "next/image";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const playerRef = useRef<ReactPlayer>(null);

  const handleTogglePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    setPlayedSeconds(state.playedSeconds);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    if (playerRef.current) {
      (playerRef.current as any).wrapper?.requestFullscreen();
    }
  };

  const handleToggleMute = () => {
    setMuted((muted) => {
      if (muted) {
        setVolume(0.5);
      } else {
        setVolume(0);
      }
      return !muted;
    });
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setMuted(newVolume === 0);
  };

  return (
    <div className={styles.player}>
      <ReactPlayer
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        url="https://www.youtube.com/watch?v=1rU7ShHAGXQ"
        controls={false}
        width="100%"
        height="100%"
        ref={playerRef}
        muted={muted}
        volume={volume}
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
        config={{
          file: {
            forceVideo: true,
          },
        }}
      />
      <div className={styles.controls}>
        <div className={styles.controlsTop}>
          <span className={styles.timeDisplay}>
            {formatDuration(playedSeconds)}
          </span>
          <input
            className={styles.progressbar}
            type="range"
            min={0}
            max={duration}
            value={playedSeconds}
            onChange={handleSeekChange}
          />
          <span className={styles.timeDisplay}>{formatDuration(duration)}</span>
        </div>
        <div className={styles.controlsBottom}>
          <button className={styles.playingBtn} onClick={handleTogglePlayPause}>
            <Image
              src={
                playing
                  ? "/icons/pause-svgrepo-com.svg"
                  : "/icons/play-svgrepo-com.svg"
              }
              alt="play/pause"
              width={20}
              height={20}
            />
          </button>
          <div className={styles.volumeContainer}>
            <button className={styles.muteBtn} onClick={handleToggleMute}>
              <Image
                src={
                  muted
                    ? "/icons/mute-svgrepo-com.svg"
                    : "/icons/unmute-svgrepo-com.svg"
                }
                alt="mute/unmute"
                width={20}
                height={20}
              />
            </button>
            <input
              className={styles.volumeBar}
              width={70}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
          <button className={styles.fullscreenBtn} onClick={handleFullscreen}>
            <Image
              src="/icons/fullscreen-svgrepo-com.svg"
              alt="fullscreen"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
