import { useState, useEffect } from "react";
// import useAuth from "./useAuth";
import Player from "../Player/Player";
import HeaderImage from "../HeaderImage/HeaderImage";
// import Featuring from "../Featuring/Featuring.jsx";
// import Discography from "../Discography/Discography";
import Sidebar from "../sidebar/Sidebar.jsx";
// import FansLike from "../FansLike/FansLike";
import PlaylistPage from "../PlaylistPage/PlaylistPage";

const Dashboard = () => {
  // const accessToken = useAuth(props.code);
  const [artist, setArtist] = useState();
  const [albums, setAlbums] = useState();
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playingTrack, setPlayingTrack] = useState();
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [favChange, setFavChange] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const url = `http://localhost:4000/api/playlists/1`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        let tracks = [];
        for (let i = 0; i < data.length; i++) {
          tracks.push(data[i].track_id);
        }
        setFavoriteSongs(tracks);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    setFavChange(false);
  }, [favChange]);

  useEffect(() => {
    const url = `http://localhost:4000/api/artists/0TnOYISbd1XYRBk9myaseg`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArtist(data[0]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (artist) {
      const url = `http://localhost:4000/api/artists/${artist.artist_id}/albums`;

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setAlbums(data);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }
  }, [artist]);

  return (
    <>
      {albums ? (
        <>
          <div className="main_body">
            <Sidebar
              setShowPlaylist={setShowPlaylist}
              favoriteSongs={favoriteSongs}
              showPlaylist={showPlaylist}
            />
            {showPlaylist ? (
              <>
                <div>
                  {/* <HeaderImage albums={albums} /> */}
                  <PlaylistPage
                    favoriteSongs={favoriteSongs}
                    setFavChange={setFavChange}
                    playingTrack={playingTrack}
                    setPlayingTrack={setPlayingTrack}
                    playing={playing}
                    setPlaying={setPlaying}
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  {/* //Add popular songs to the header_image with all other components */}

                  <HeaderImage
                    albums={albums}
                    artist={artist}
                    favoriteSongs={favoriteSongs}
                    setFavChange={setFavChange}
                    playingTrack={playingTrack}
                    setPlayingTrack={setPlayingTrack}
                    playing={playing}
                    setPlaying={setPlaying}
                  />
                </div>
              </>
            )}
          </div>
          {/* <Player
            accessToken={accessToken}
            playingTrack={playingTrack}
            setPlayingTrack={setPlayingTrack}
            playing={playing}
            setPlaying={setPlaying}
          /> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dashboard;
