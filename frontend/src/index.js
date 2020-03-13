import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header/index'
import GlobalStyle from "./styles/global"
import Routes from './routes/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
