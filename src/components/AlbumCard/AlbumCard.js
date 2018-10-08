import React from "react";
import "./AlbumCard.css";


const AlbumCard = props => (
    <div className="card" onClick={() => props.playAlbum(props.collectionViewUrl)}>
    <div className="img-container">
      <img alt={props.album} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Album:</strong> {props.album}
        </li>
        <li>
          <strong>Artist:</strong> {props.artist}
        </li>
        <li>
          <strong>Year:</strong> {props.year}
        </li>
      </ul>
    </div>
  </div>
);

export default AlbumCard;
