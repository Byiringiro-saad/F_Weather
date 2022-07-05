import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "./features/location";

import Main from "./pages/main";

const App = () => {
  const [userData, setUserData] = useState();

  const { isLoading } = useQuery("location", () => {
    axios.get("/").then((response) => {
      setUserData(response.data);
    });
  });

  if (isLoading) return <p>Loading....</p>;

  return (
    <Container>
      <Main user={userData} />
    </Container>
  );
};

const Container = styled.div``;

export default App;
