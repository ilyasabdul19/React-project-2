import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      SearchResults:[{name:'song ', artist:'drake', album:'only one', id:'11'},
      {name:'song2 ', artist:'drake1', album:'only one1', id:'12'}
    ],
      playlistName:[{name:'hello', artist:'hola', album:'boom', id:'1'}],
      playlistTracks:[{name:'e', artist:'e', album:'e', id:'1'}]
    };
    
    this.addTrack= this.addTrack.bind(this);
    this.removeTrack= this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.SavePlaylist = this.SavePlaylist.bind(this);
  }
 
  removeTrack(track) {
    let tracks = this.state.playlistTracks; 
    tracks = tracks.filter(currentTrack=> currentTrack.id !== track.id);
    this.setState({playlistTracks:tracks});
  }

 addTrack(track) {
   let tracks = this.state.playlistTracks;
 if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
   return;
 }
  
 tracks.push(track);
 this.setState({playlistTracks:tracks})
 }

 updatePlaylistName (name) {
   this.setState({playlistName: name});
 }

 SavePlaylist () {
   const trackUris = this.state.playlistTracks.map(track => track.uri)
 }

  render () {
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
       <SearchResults  searchResults={this.state.SearchResults} onAdd={this.addTrack} />
       <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
       onRemove={this.removeTrack} 
       onChangeName= {this.updatePlaylistName}
       />
      </div>
    </div>
  </div>
  );
  
  }
}

export default App;
