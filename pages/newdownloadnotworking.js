import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

function Pls() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const response = await fetch(
        `https://api.cloudinary.com/v1.1/dvd6b198j/image/upload`,
        {
          headers: {
            Authorization:
              "Basic " +
              btoa(
                `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
              ),
          },
          mode: "no-cors",
        }
      );
      const data = await response.json();
      console.log(data);
      const urls = data.resources.map((resource) => resource.secure_url);
      console.log(urls);
      setImageUrls(urls);
    };

    fetchImageUrls(); // Call the function after defining it
  }, []);

  return (
    <div>
      {imageUrls.map((url) => (
        <CldImage
          key={url}
          src={url}
          width="600"
          height="600"
          alt="<Alt Text>"
        />
      ))}
    </div>
  );
}

export default Pls;
