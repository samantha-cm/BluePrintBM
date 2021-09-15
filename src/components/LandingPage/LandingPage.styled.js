import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 132, 255);
  background: linear-gradient(
    36deg,
    rgba(0, 132, 255, 1) 0%,
    rgba(75, 49, 218, 1) 100%
  );
  h1 {
    margin: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 80px;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;
