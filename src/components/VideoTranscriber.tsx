import React, { useState } from 'react';

const VideoTranscriber: React.FC = () => {
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [transcription, setTranscription] = useState<string>('');

    const handleTranscribe = () => {
        // Placeholder for transcription logic
        setTranscription('Transcribing video...');
    };

    return (
        <div>
            <h1>Video Transcriber</h1>
            <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Enter video URL"
            />
            <button onClick={handleTranscribe}>Transcribe Video</button>
            <div>
                <h2>Transcription Output</h2>
                <p>{transcription}</p>
            </div>
        </div>
    );
};

export default VideoTranscriber;