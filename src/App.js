import React from 'react';
import './App.css';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

function App() {
  return (
    <div className="App">
     <Video loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4" type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
      </Video>
    </div>
  );
}

export default App;
