import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextValue } from "../../hooks/context";
import {
  DivTitle,
  Container,
  DivAuto,
  DivMargin,
  ContainerOne,
  ContainerTwo,
  Description,
  Intrucciones,
} from "./MarginPage.styled";
import box from "../../box-free/box.png";
import Form from "../Form/Form";
import { Button } from "../Button/Button";
import Swal from "sweetalert2";
function MarginPage() {
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
      setValidations(true);
      return;
    }
    if (!marginBottom.trim()) {
      console.log("Hace falta llenar margin-Bottom");
      setValidations(true);
      return;
    }
    if (!marginLeft.trim()) {
      console.log("Hace falta llenar margin-Left");
      setValidations(true);
      return;
    }
    if (
      event.target[0].value === "50px" &&
      event.target[1].value === "80px" &&
      event.target[2].value === "30px" &&
      event.target[3].value === "20px"
    ) {
      setValidations(false);
      console.log("correct");
      setNextLevel("visible");
      Swal.fire({
        title: "Bien hecho!",
        text: "Los valores son correctos",
        icon: "success",
        confirmButtonText: "ok",
      });
    } else {
      setValidations(false);
      setMarginTop("");
      setMarginBottom("");
      setMarginLeft("");
      setMarginRight("");
      Swal.fire({
        title: "Buen intento!",
        text: "Los valores no son correctos",
        icon: "error",
        confirmButtonText: "ok",
      });
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

          <Link to="/level-one" style={{ textDecoration: "none" }}>
            <Button name="Next level" vis={nextLevel} />
          </Link>
        </ContainerOne>
        <ContainerTwo>
          <br />
          <div
            style={{
              minWidth: "500px",
              minHeight: "400px",
              border: "2px solid blue",
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

export default MarginPage;
