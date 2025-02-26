# Video Caption Editor

A modern web application for adding and managing captions to videos from various online platforms. Built with React, TypeScript, and Tailwind CSS.

![Video Caption Editor](https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1600)

## Features

- 🎥 Support for multiple video platforms:
  - YouTube
  - Vimeo
  - Facebook
  - SoundCloud
  - Twitch
  - Direct video files (.mp4, .webm, .ogg)
- ⚡ Real-time caption editing
- 🎯 Precise timestamp control
- 🎨 Beautiful, responsive UI
- 📱 Mobile-friendly design

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Video Player**: react-player
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development Tools**:
  - ESLint for code linting
  - TypeScript for type safety
  - PostCSS for CSS processing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-caption-editor.git
   cd video-caption-editor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Usage

1. Enter a video URL from any supported platform in the input field
2. Click "Load Video" to load the video
3. Use the "Add Caption" button to create a new caption
4. Set the start and end times for each caption
5. Enter the caption text
6. The captions will appear on the video during playback at their specified times

### Sample Videos for Testing

- YouTube: `https://www.youtube.com/watch?v=aqz-KE-bpKQ`
- Vimeo: `https://vimeo.com/148751763`
- Direct MP4: `https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4`

## Project Structure

```
video-caption-editor/
├── src/
│   ├── components/
│   │   ├── VideoPlayer.tsx
│   │   ├── VideoUrlInput.tsx
│   │   └── CaptionEditor.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Player](https://github.com/cookpete/react-player) for video playback support
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Lucide React](https://lucide.dev) for beautiful icons
- [Vite](https://vitejs.dev) for the build tooling
