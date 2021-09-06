import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(30, 30, 30);
  flex-direction: column;
  font-size: 15px;
`;

export const Fila = styled.div`
  width: 100%;
  height: 11.1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;
  color: #d9d9d9;
`;

export const Text = styled.div`
  height: 100%;
  width: 90%;
  color: rgb(215, 186, 125);
  font-weight: bold;
  label {
    color: rgb(156, 220, 254);
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid gray;
    color: rgb(180, 205, 167);
    font-weight: bold;
    font-size: 15px;
    outline: none;
    width: 40px;
    &::placeholder {
      background: transparent;
    }
  }
`;
