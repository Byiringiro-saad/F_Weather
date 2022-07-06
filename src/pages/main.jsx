import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import axios from "../features/weather";
import Background from "../components/background";
import Content from "../components/content";

const Main = ({ user }) => {
  const [weatherData, setWeatherData] = useState();

  const { isLoading } = useQuery(
    "weather",
    () => {
      axios
        .get(`/current?lat=${user?.latitude}&lon=${user?.longitude}`, {})
        .then((response) => {
          setWeatherData(response.data.data[0]);
          return response.data;
        });
    },
    { enabled: user != null }
  );

  // console.log(weatherData);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Content data={weatherData} />
      <Background keyword={weatherData?.weather?.description} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Main;
