import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
// import { useContextValue } from "./hooks/context.js";

// const Home2 = () => {
//   const context = useContextValue();
//   console.log(context);
//   return <h1 onClick={() => context.setMargin(context.margin + 1)}>Home</h1>;
// };
const LevelOne = () => <h1>Level One</h1>;

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/level-one" component={LevelOne} exact />
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
