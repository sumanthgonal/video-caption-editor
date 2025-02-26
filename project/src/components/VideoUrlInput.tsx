import React, { useState } from 'react';
import { Video } from 'lucide-react';

interface VideoUrlInputProps {
  onUrlSubmit: (url: string) => void;
}

export function VideoUrlInput({ onUrlSubmit }: VideoUrlInputProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onUrlSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <label
            htmlFor="video-url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Video URL
          </label>
          <input
            id="video-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter video URL (e.g., https://example.com/video.mp4)"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="self-end flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Video size={20} />
          Load Video
        </button>
      </div>
    </form>
  );
}