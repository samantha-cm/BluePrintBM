import { Link } from "react-router-dom";
import { Container, BtnStart } from "./LandingPage.styled";
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

        <BtnStart>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/home"
          >
            START GAME
          </Link>
        </BtnStart>
      </Container>
    </>
  );
}

export default LandingPage;
