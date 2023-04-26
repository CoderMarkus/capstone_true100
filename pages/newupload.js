import Image from "next/image.js";
import React, { useState } from "react";
import styled from "styled-components";

export default function Upload() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  async function submitImage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/newupload", {
        method: "post",
        body: formData,
      });
      const img = await response.json();

      console.log("Browser: response from API: ", img);

      setImage(img);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      {image && (
        <ImageContainer>
          <Image
            src={image.url}
            alt="some image"
            height={image.height}
            width={image.width}
          />
        </ImageContainer>
      )}
      {error && <div>{error.message}</div>}
      <Form onSubmit={submitImage}>
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  max-width: 20rem;
  margin: 2rem auto;
`;

const ImageContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  border: 2px solid grey;
  border-radius: 1rem;
  padding: 1rem;
`;
