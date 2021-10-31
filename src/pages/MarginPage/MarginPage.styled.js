import styled from "styled-components";

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
  width: ${(p) => (p.width ? p.width : "100px")};
  height: ${(p) => (p.height ? p.height : "100px")};
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
  background-color: #f6f6f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230400ff' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
