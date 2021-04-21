import React from 'react';  
import './App.css';
import  Row from './Row';
import requests from './requests';
import instance from './axios';
import Banner from './Banner';
import Nav from './Navbar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending}/>
      <Row 
        title="Top rated" 
        fetchUrl={requests.fetchTopRated}/>
      <Row 
        title="Action movies" 
        fetchUrl={requests.fetchActionMovies}/>
      <Row 
        title="Romantic movies" 
        fetchUrl={requests.fetchRomanceMovies}/>
      <Row 
        title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries}/>
      
     </div>
  );
}

export default App;
