import { useState, useEffect } from "react";

function UploadedPlaylists() {
  const [playlistUrls, setPlaylistUrls] = useState([]);

  useEffect(() => {
    async function loadCloudinary() {
      const cloudinary = await import("cloudinary").then((mod) => mod.default);

      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      });

      const { resources } = await cloudinary.search
        .expression("folder:your_folder_name")
        .sort_by("public_id", "desc")
        .execute();

      const urls = resources.map((res) => res.url);

      setPlaylistUrls(urls);
    }

    loadCloudinary();
  }, []);

  return (
    <div>
      <h1>Uploaded Playlists</h1>
      <ul>
        {playlistUrls.map((url, i) => (
          <li key={i}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UploadedPlaylists;

export default MyComponent;
