import Video from "./Components/Video";
import "./App.css";
import axios from './axios'
import { useEffect, useState } from "react";

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios
        .get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts()
  }, [])

 
  
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
