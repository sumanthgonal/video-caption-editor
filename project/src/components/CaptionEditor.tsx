import React from 'react';
import { Plus } from 'lucide-react';
import { Caption } from '../types';

interface CaptionEditorProps {
  captions: Caption[];
  onCaptionAdd: () => void;
  onCaptionUpdate: (caption: Caption) => void;
  onCaptionDelete: (id: string) => void;
}

export function CaptionEditor({
  captions,
  onCaptionAdd,
  onCaptionUpdate,
  onCaptionDelete,
}: CaptionEditorProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Captions</h2>
        <button
          onClick={onCaptionAdd}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={20} />
          Add Caption
        </button>
      </div>
      
      <div className="space-y-4">
        {captions.map((caption) => (
          <div
            key={caption.id}
            className="bg-white p-4 rounded-lg shadow-md space-y-3"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time (seconds)
                </label>
                <input
                  type="number"
                  value={caption.startTime}
                  onChange={(e) =>
                    onCaptionUpdate({
                      ...caption,
                      startTime: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time (seconds)
                </label>
                <input
                  type="number"
                  value={caption.endTime}
                  onChange={(e) =>
                    onCaptionUpdate({
                      ...caption,
                      endTime: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Caption Text
              </label>
              <textarea
                value={caption.text}
                onChange={(e) =>
                  onCaptionUpdate({
                    ...caption,
                    text: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
                rows={2}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Duration: {formatTime(caption.endTime - caption.startTime)}
              </span>
              <button
                onClick={() => onCaptionDelete(caption.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}