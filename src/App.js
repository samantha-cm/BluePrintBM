import { ContextProvider } from "./hooks/context";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;}
`;

function App() {
  return (
    <>
      <Global />
      <ContextProvider>
        <Router />
      </ContextProvider>
    </>
  );
}

export default App;
