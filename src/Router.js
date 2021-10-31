import { BrowserRouter, Switch, Route } from "react-router-dom";
import MarginPage from "./pages/MarginPage/MarginPage.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import LevelOnePage from "./pages/LevelOnePage/LevelOnePage.jsx";
import { useContextValue } from "./hooks/context.js";

// const Home2 = () => {
//   const context = useContextValue();
//   console.log(context);
//   return <h1 onClick={() => context.setMargin(context.margin + 1)}>Home</h1>;
// };
// const LevelOne = () => <h1>Level One</h1>;

const Home = () => {
  const context = useContextValue();
  console.log(context);
  return <h1 onClick={() => context.setWidth(context.width + 1)}>Home</h1>;
};
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/margin" component={MarginPage} exact />
        <Route path="/width&height" component={LevelOnePage} exact />
        <Route path="/" component={LandingPage} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
