import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = (props) => {
  const [marginTop, setMarginTop] = useState("");
  const [marginRight, setMarginRight] = useState("");
  const [marginBottom, setMarginBottom] = useState("");
  const [marginLeft, setMarginLeft] = useState("");

  return (
    <Context.Provider
      //   {...props} esto si quieres evitar poner el children implicito
      value={{
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        padding: "",
        width: "",
        height: "",
        border: "",
        setMarginTop,
        setMarginRight,
        setMarginBottom,
        setMarginLeft,
        nevel: "",
        points: "",
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

// Este es un custom hook, lo usamos para evitar la llamada a useContext en todos los componentes importando Context
export const useContextValue = () => {
  const ctx = useContext(Context);

  return ctx;
};
