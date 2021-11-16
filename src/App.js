import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
    <h1>Hello this is a Netflix Clone</h1>
    <Row title="NANAFLIX ORIGINALS" fetchUrl={requests.fetchNanaflixOriginals}/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App
