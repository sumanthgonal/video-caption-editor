import React, { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { CaptionEditor } from './components/CaptionEditor';
import { VideoUrlInput } from './components/VideoUrlInput';
import { Caption, VideoState } from './types';
import { FileVideo } from 'lucide-react';

function App() {
  const [videoState, setVideoState] = useState<VideoState>({
    url: '',
    duration: 0,
    currentTime: 0,
    isPlaying: false,
  });

  const [captions, setCaptions] = useState<Caption[]>([]);

  const handleUrlSubmit = (url: string) => {
    setVideoState((prev) => ({ ...prev, url }));
  };

  const handleCaptionAdd = () => {
    const newCaption: Caption = {
      id: crypto.randomUUID(),
      text: '',
      startTime: Math.floor(videoState.currentTime),
      endTime: Math.floor(videoState.currentTime) + 5,
    };
    setCaptions((prev) => [...prev, newCaption]);
  };

  const handleCaptionUpdate = (updatedCaption: Caption) => {
    setCaptions((prev) =>
      prev.map((caption) =>
        caption.id === updatedCaption.id ? updatedCaption : caption
      )
    );
  };

  const handleCaptionDelete = (id: string) => {
    setCaptions((prev) => prev.filter((caption) => caption.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileVideo size={32} className="text-blue-500" />
            <h1 className="text-3xl font-bold">Video Caption Editor</h1>
          </div>
          <p className="text-gray-600">
            Add and manage captions for your videos with ease
          </p>
        </div>

        <VideoUrlInput onUrlSubmit={handleUrlSubmit} />

        {videoState.url && (
          <>
            <VideoPlayer
              videoState={videoState}
              captions={captions}
              onTimeUpdate={(currentTime) =>
                setVideoState((prev) => ({ ...prev, currentTime }))
              }
              onDurationChange={(duration) =>
                setVideoState((prev) => ({ ...prev, duration }))
              }
              onPlayStateChange={(isPlaying) =>
                setVideoState((prev) => ({ ...prev, isPlaying }))
              }
            />

            <CaptionEditor
              captions={captions}
              onCaptionAdd={handleCaptionAdd}
              onCaptionUpdate={handleCaptionUpdate}
              onCaptionDelete={handleCaptionDelete}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;