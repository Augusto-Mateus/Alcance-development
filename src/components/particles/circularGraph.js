import React, { Component } from "react";
import styled from "styled-components";
import Ellipse from "../../static/Ellipse.png";

const loads = ["load 1", "load 2", "load 3", "load 4"];

const Main = styled.div`
  align-items: center;
  display: flex;
  color: #fff;
  flex-direction: row;
  margin-top: 122px;

  p {
    margin-top: 20px;
  }
`;

const SubDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubDiv1 = styled.div`
  align-items: center;
  background: url(${Ellipse});
  background-color: rgba(100, 100, 100, 0.3);
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: center;
  margin: 20px 20px 7px 20px;
  width: 180px;
  p:first-child {
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 0 0;
  }
  p:last-child {
    margin: 0 0 0 0;
  }
`;

class CircularGraph extends Component {
  render() {
    return (
      <Main>
        {loads.map(load => {
          return (
            <SubDiv key={load}>
              <SubDiv1>
                <p>100%</p>
                <p>Completo</p>
              </SubDiv1>
              <p>{load}</p>
            </SubDiv>
          );
        })}
      </Main>
    );
  }
}

export default CircularGraph;