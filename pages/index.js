import React, { useState } from "react";
import fs from "fs";
import xml2js from "xml2js";
import { Wrapper, Uber, Orderli, Lila } from "../components/styles";

const Playlist = ({ top100 }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Wrapper>
      <Uber>Top 100 meistgespielten Songs</Uber>
      <Orderli>
        {top100.map((song) => (
          <Lila key={song.id}>
            <span style={{ color: "hotpink" }}>{song.title}</span>
            <span>
              {" "}
              von {song.artist} ({song.playCount} Mal gespielt)
            </span>
          </Lila>
        ))}
      </Orderli>
      <div>
        <input type="file" onChange={handleFileUpload} />
        <button>Upload Playlist</button>
      </div>
    </Wrapper>
  );
};

export default Playlist;

export async function getStaticProps() {
  // Loading the VirtualDJ-Database XML-file
  const databaseXml = fs.readFileSync("./database.xml", "utf-8");

  // Convert the XML-file in a JavaScript-Object
  const parser = new xml2js.Parser();
  const databaseData = await parser.parseStringPromise(databaseXml);

  // Extract the songdatas of the JavaScript-Object
  let songs = [];
  if (
    databaseData.VirtualDJ_Database &&
    databaseData.VirtualDJ_Database.Songs &&
    databaseData.VirtualDJ_Database.Songs[0] &&
    databaseData.VirtualDJ_Database.Songs[0].Song
  ) {
    songs = databaseData.VirtualDJ_Database.Songs[0].Song;
  }

  // Filter the Songs, to get the sogs with Playcounts
  const songsWithPlayCounts = songs.filter((song) => song.Playcount);

  // Sort the songs of playing times from high to low
  const sortedSongs = songsWithPlayCounts.sort(
    (a, b) => b.Playcount[0] - a.Playcount[0]
  );

  // Extract of the 100 most played titles Songs from the sorted list
  const top100 = sortedSongs.slice(0, 100).map((song) => ({
    id: song.$.ID,
    title: song.Title?.[0] ?? "Unknown Title",
    artist: song.Artist?.[0] ?? "Unknown Artist",
    playCount: parseInt(song.Playcount?.[0]) ?? 0,
  }));

  return {
    props: {
      top100,
    },
  };
}
