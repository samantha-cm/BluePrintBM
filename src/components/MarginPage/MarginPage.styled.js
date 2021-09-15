import styled from "styled-components";

export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    margin: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

export const ButtonPlay = styled.button`
  color: #fff;
  font-weight: bold;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background: rgb(60, 60, 60);
  cursor: pointer;
  padding: 0;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const DivAuto = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #84d442;
`;
export const DivMargin = styled.div`
  width: 100px;
  height: 100px;
  background: rebeccapurple;
  margin-top: ${(p) => (p.top ? p.top : "0px")};
  margin-right: ${(p) => (p.right ? p.right : "0px")};
  margin-bottom: ${(p) => (p.bottom ? p.bottom : "0px")};
  margin-left: ${(p) => (p.left ? p.left : "0px")};
`;

export const BtnNextLevel = styled.button`
  background: greenyellow;
  font-weight: bold;
  color: black;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;

  visibility: ${(p) => (p.vis === "hidden" ? "hidden" : "visible")};
`;

export const ContainerOne = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #4b31da;
  width: 30%;
  min-width: 400px;
  height: 100vh;
  padding: 0 30px;
  /* border-right: 2px solid ; */
  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: start;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  form {
    width: 100%;
  }
`;
export const ContainerTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  width: 70%;
  height: 100vh;
`;

export const Intrucciones = styled.div`
  width: 100%;
  color: #fff;
`;

export const Description = styled.div`
  width: 100%;
  p {
    text-align: justify;
    color: #fff;
  }
`;
