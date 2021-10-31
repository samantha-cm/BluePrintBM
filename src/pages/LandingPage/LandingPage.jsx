import { Link } from "react-router-dom";
import { Container } from "./LandingPage.styled";
import { Button } from "../../components/Button/Button.jsx";
import box from "../../box-free/box.png";
function LandingPage() {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 translate="no">Box Model Blueprint</h1>
          <img src={box} alt="game" />
        </div>
        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/margin"
        >
          <Button name="START GAME" />
        </Link>
      </Container>
    </>
  );
}

export default LandingPage;
