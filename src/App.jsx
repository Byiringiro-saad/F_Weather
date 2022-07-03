import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Main from "./pages/main";
import Background from "./components/background";

const App = () => {
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    axios.get("http://ipwho.is").then((response) => {
      setLocationData(response.data);
    });
  }, []);

  return (
    <Container>
      <Main data={locationData} />
      <Background />
    </Container>
  );
};

const Container = styled.div``;

export default App;
