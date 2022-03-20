import React, { useState } from "react";
import "../css/videosidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="video-sidebar">
      <div className="video-sidebar-btn">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="video-sidebar-btn">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>

      <div className="video-sidebar-btn">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}
