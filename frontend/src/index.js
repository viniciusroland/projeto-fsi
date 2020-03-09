import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyle from "./styles/global"

function App() {
  return (
    <>
      <Home/>
      <GlobalStyle />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
