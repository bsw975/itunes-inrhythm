import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";
import albums from "./albums.json";
import API from "./utils/API";
import "./App.css";

const l = console.log;
let newpage = true;

class App extends Component {

  state = {
    results: {},
    search: '',
    albums,
    newpage
  };

  cleanupResults = resultsArray => {
    let uniqueAlbums = [];
    let uniqueAlbumTitles = [];
    for (let i = 0; i < resultsArray.length; i++) {
      if (uniqueAlbumTitles.indexOf(resultsArray[i].collectionName) === -1) {
        let year = resultsArray[i].releaseDate.substring(0, 4);
        uniqueAlbumTitles.push(resultsArray[i].collectionName);
        uniqueAlbums.push(
          {
            id: i,
            collectionName: resultsArray[i].collectionName,
            artistName: resultsArray[i].artistName,
            releaseDate: year,
            artworkUrl100: resultsArray[i].artworkUrl100,
            collectionViewUrl: resultsArray[i].collectionViewUrl
          }
        )
      }
    }
    this.setState({ albums: uniqueAlbums, newpage: false });
  }

  searchiTunes = query => {
    API.search(query)
      .then(res => this.cleanupResults(res.data.results))
      .catch(err => l(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search iTunes for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchiTunes(this.state.search);
  };

  playAlbum = url => {
    window.open(url, "_blank");
  };

  // Map over this.state.albums and render a AlbumCard component for each (unique?) album returned for the search term (artist) 
  render() {
    return (
      <Wrapper>
        <div id="title-div">
          <Search
            newpage={this.state.newpage}
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        {this.state.albums.map(album => (
          <AlbumCard
            playAlbum={this.playAlbum}
            id={album.id}
            key={album.id}
            album={album.collectionName}
            artist={album.artistName}
            year={album.releaseDate}
            image={album.artworkUrl100}
            collectionViewUrl={album.collectionViewUrl}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
