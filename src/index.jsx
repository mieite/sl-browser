import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>VERY NIFTY STREAMER SONG LIST HISTORY BROWSING TOOL</h1>
      <h4>coded (poorly) by pirate_patch</h4>
      <h5>version 0.01: search by song name included</h5>
      <Main/>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
