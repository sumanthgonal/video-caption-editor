import React, { useRef, useEffect } from 'react';
import { VideoState, Caption } from '../types';

interface VideoPlayerProps {
  videoState: VideoState;
  captions: Caption[];
  onTimeUpdate: (time: number) => void;
  onDurationChange: (duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
}

export function VideoPlayer({
  videoState,
  captions,
  onTimeUpdate,
  onDurationChange,
  onPlayStateChange,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (videoState.isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoState.isPlaying]);

  const currentCaption = captions.find(
    caption => 
      videoState.currentTime >= caption.startTime && 
      videoState.currentTime <= caption.endTime
  );

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <video
        ref={videoRef}
        src={videoState.url}
        className="w-full rounded-lg shadow-lg"
        onTimeUpdate={(e) => onTimeUpdate(e.currentTarget.currentTime)}
        onDurationChange={(e) => onDurationChange(e.currentTarget.duration)}
        onPlay={() => onPlayStateChange(true)}
        onPause={() => onPlayStateChange(false)}
        controls
      />
      {currentCaption && (
        <div className="absolute bottom-16 left-0 right-0 text-center">
          <div className="inline-block bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-lg">
            {currentCaption.text}
          </div>
        </div>
      )}
    </div>
  );
}