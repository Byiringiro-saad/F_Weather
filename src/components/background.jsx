import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import axios from "../features/image";

const Background = ({ keyword }) => {
  const [image, setImage] = useState();

  const { isLoading } = useQuery(
    "image",
    () => {
      axios
        .get("/photos/random", {
          params: {
            query: keyword,
          },
        })
        .then((response) => {
          setImage(response.data);
        });
    },
    { enabled: keyword != null, staleTime: Infinity }
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <img src={image?.urls?.full} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: -1; */
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export default Background;
