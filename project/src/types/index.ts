export interface Caption {
  id: string;
  text: string;
  startTime: number; // in seconds
  endTime: number; // in seconds
}

export interface VideoState {
  url: string;
  duration: number;
  currentTime: number;
  isPlaying: boolean;
}