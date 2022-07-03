import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Main = ({ data }) => {
  console.log(data);

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/3.0/onecall`, {
        params: {
          lat: data.latitude,
          lon: data.longitude,
          appid: "755c906b9f20c638fdc343eedabac6eb",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Container></Container>;
};
const Container = styled.div``;

export default Main;
