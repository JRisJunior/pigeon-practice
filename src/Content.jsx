import React from 'react';
import ReactPlayer from 'react-player';

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>this is a test</p>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} />
    </div>
  );
}