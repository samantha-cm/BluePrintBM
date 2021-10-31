import { useContextValue } from "../../hooks/context";
import Title from "../../components/Title/Title";
import { Container, Description, Intrucciones } from "./LevelOnePage.styled";
import {
  ContainerOne,
  ContainerTwo,
  DivAuto,
  DivMargin,
} from "../MarginPage/MarginPage.styled";
import Form from "../../components/Form/Form.jsx";
const LevelOnePage = () => {
  const { width, setWidth, height, setHeight } = useContextValue();
  console.log(setWidth);

  const data = [
    {
      name: "width",
      value: width,
      setValue: setWidth,
    },
    {
      name: "height",
      value: height,
      setValue: setHeight,
    },
  ];

  function sendData(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div>
      <Container>
        <ContainerOne>
          <Title />
          <Description>
            <h4> Width </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              quaerat vero. Quaerat, vel rem. Vero molestiae beatae eaque totam
              aliquid quis praesentium minima. Magni quia maxime voluptatum
              asperiores optio est.
            </p>
            <h4> Height </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              distinctio et iure repudiandae ipsam, debitis cum iste voluptatum
              molestias nostrum. Commodi quo rerum tempora unde molestiae cumque
              totam aliquid id.
            </p>
          </Description>
          <Intrucciones>
            <h4>Instrucciones:</h4>
            <ul>
              <li>
                Coloca un width de <b> 50px</b>
              </li>
              <li>
                Coloca un height de <b>80px</b>
              </li>
            </ul>
          </Intrucciones>
          <Form data={data} sendData={sendData} />
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
              <DivMargin height={height} width={width} />
            </DivAuto>
          </div>
          <br />
        </ContainerTwo>
      </Container>
    </div>
  );
};

export default LevelOnePage;
