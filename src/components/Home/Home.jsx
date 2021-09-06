import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextValue } from "../../hooks/context";
import {
  DivTitle,
  Container,
  DivAuto,
  DivMargin,
  BtnNextLevel,
  ContainerOne,
  ContainerTwo,
  Description,
  Intrucciones,
} from "./Home.styled";
import box from "../../box-free/box.png";
import Form from "../Form/Form";
function Home() {
  const {
    marginTop,
    setMarginTop,
    marginRight,
    setMarginRight,
    marginBottom,
    setMarginBottom,
    marginLeft,
    setMarginLeft,
  } = useContextValue();

  const [nextLevel, setNextLevel] = useState("hidden");
  const [validations, setValidations] = useState(false);

  function sendData(event) {
    event.preventDefault();
    if (!marginTop.trim()) {
      console.log("Hace falta llenar margintop");
      setValidations(true);
      return;
    }
    if (!marginRight.trim()) {
      console.log("Hace falta llenar margi-Right");
      return;
    }
    if (!marginBottom.trim()) {
      console.log("Hace falta llenar margin-Bottom");
      return;
    }
    if (!marginLeft.trim()) {
      console.log("Hace falta llenar margin-Left");
      return;
    }
    if (
      event.target[0].value === "50px" &&
      event.target[1].value === "80px" &&
      event.target[2].value === "30px" &&
      event.target[3].value === "20px"
    ) {
      setNextLevel(true);
      console.log("correct");
      setNextLevel("visible");
    } else {
      console.log("incorrect");
    }

    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
  }

  return (
    <>
      <Container>
        <ContainerOne>
          <DivTitle>
            <h2 translate="no">Box Model Blueprint</h2>
            <img src={box} alt="game" />
          </DivTitle>

          <Description>
            <h4>Margin</h4>
            <p>
              La propiedad margin de CSS se utilizan para crear espacio
              alrededor de los elementos, fuera de los bordes definidos. Con
              CSS, tienes control total sobre los márgenes. Existen propiedades
              para establecer el margen para cada lado de un elemento (superior,
              derecha, inferior e izquierda)
            </p>
          </Description>
          <Intrucciones>
            <h4>Instrucciones:</h4>
            <ul>
              <li>
                Coloca un margin-top de <b> 50px</b>
              </li>
              <li>
                Coloca un margin-rigth de <b>80px</b>
              </li>
              <li>
                Coloca un margin-bottom de <b>30px</b>
              </li>
              <li>
                Coloca un margin-left de <b>20px</b>
              </li>
            </ul>
          </Intrucciones>

          <Form
            sendData={sendData}
            marginTop={marginTop}
            setMarginTop={setMarginTop}
            validations={validations}
            marginRight={marginRight}
            setMarginRight={setMarginRight}
            marginBottom={marginBottom}
            setMarginBottom={setMarginBottom}
            marginLeft={marginLeft}
            setMarginLeft={setMarginLeft}
          />
          <BtnNextLevel vis={nextLevel}>
            <Link to="/level-one" style={{ textDecoration: "none" }}>
              Next level
            </Link>
          </BtnNextLevel>
        </ContainerOne>
        <ContainerTwo>
          <br />
          <div
            style={{
              minWidth: "500px",
              minHeight: "400px",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
              height: "auto",
            }}
          >
            <DivAuto>
              <DivMargin
                top={marginTop}
                right={marginRight}
                bottom={marginBottom}
                left={marginLeft}
              />
            </DivAuto>
          </div>
          <br />
        </ContainerTwo>
      </Container>
    </>
  );
}

export default Home;
