// components/YouTubeEmbed.js
import React from 'react';

interface YouTubeEmbedProps {
  url: string;
}

export const YouTubeEmbed = ({ url }: YouTubeEmbedProps) => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe
      src={url}
      title="YouTube Video"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
      }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
