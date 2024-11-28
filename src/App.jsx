import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './assets/nav/nav';
import Main from './assets/page/main/main';

function App() {

return (
  <>
    <NavBar/>
    <Main/>
  </>
)
}
export default App;
