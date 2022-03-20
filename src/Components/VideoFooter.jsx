import React from "react";
import "../css/videofooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

export default function VideoFooter({ channel, description, song }) {
  return (
    <div className="video-footer">
      <div className="video-footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="video-footer-ticker">
          <MusicNoteIcon className="video-footer-icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song} </p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="record"
        className="video-footer-record"
      />
    </div>
  );
}
