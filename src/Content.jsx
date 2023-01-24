import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from './Button';

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>this is a test</p>
      <Button></Button>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} />
    </div>
  );
}