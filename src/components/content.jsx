import React from "react";
import styled from "styled-components";

const Content = ({ data }) => {
  console.log(data);

  return (
    <Container>
      <div className="header">
        <div className="country">
          <p>{data?.city_name}</p>
          <img
            src={`https://countryflagsapi.com/png/${data?.country_code}`}
            alt={data?.country_code}
          />
        </div>
        <div className="time">
          <p>{data?.ob_time}</p>
        </div>
        <div className="temp">
          <p>
            {data?.temp}
            <span>&#176;</span>C
          </p>
        </div>
      </div>
      <div className="body">
        <div className="title">
          <p>{data?.weather?.description}</p>
        </div>
        {/* <p>You better have an umbrella</p> */}
        <table>
          <tr>
            <td>Rain</td>
            <td>{data?.precip}</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>
              {data?.wind_cdir} {data?.wind_spd} Km/h
            </td>
          </tr>
          <tr>
            <td>Clouds</td>
            <td>{data?.clouds}</td>
          </tr>
          <tr>
            <td>Snow</td>
            <td>{data?.snow}</td>
          </tr>
        </table>
      </div>
      <div className="footer">
        <p>TimeZone: {data?.timezone} </p>
        <p>Station: {data?.station}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 400px;
  background: var(--background);
  z-index: 10;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;

  .header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .country {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: row;

      img {
        width: 20px;
        margin: 0 0 0 5px;
        border-radius: 3px;
      }
    }
  }

  .body {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .title {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;

      p {
        font-size: 1.5em;
        font-weight: 700;
        margin: 0;
      }
    }

    p {
      font-size: 1.1em;
      font-weight: 600;
    }

    table {
      margin: 50px 0 0 0;
      width: 40%;
      height: auto;

      tr td {
        :first-child {
          text-align: start;
          font-weight: 700;
        }

        :last-child {
          text-align: end;
          font-weight: 700;
          color: var(--blue);
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Content;
