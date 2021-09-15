import React from "react";
import { BtnStart } from "./Button.styled";

export const Button = ({ name, vis }) => {
  return (
    <>
      <BtnStart vis={vis}>{name}</BtnStart>
    </>
  );
};
