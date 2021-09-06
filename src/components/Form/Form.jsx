import { ButtonPlay } from "../Home/Home.styled";
import { Container, Fila, Num, Text } from "./Form.styled";

function Form({
  sendData,
  marginTop,
  setMarginTop,
  validations,
  marginRight,
  setMarginRight,
  marginBottom,
  setMarginBottom,
  marginLeft,
  setMarginLeft,
}) {
  return (
    <>
      <Container>
        <form onSubmit={sendData}>
          <Fila
            style={{
              background: "rgb(60,60,60)",
              padding: "5px 0",
            }}
          >
            <Num></Num>
            <Text
              style={{
                color: "#19c555",
                display: "flex",
                alignItems: "center",
              }}
            >
              CSS
            </Text>
          </Fila>
          <Fila>
            <Num>1</Num>
            <Text>.box﹛</Text>
          </Fila>
          <Fila>
            <Num>2</Num>
            <Text>
              <label>margin-top:</label>
              <input
                type="text"
                name="margin-top"
                value={marginTop}
                onChange={(event) => setMarginTop(event.target.value)}
              />
              ;
              {validations === true ? (
                <p style={{ color: "red", margin: "0" }}>falta llenar</p>
              ) : (
                ""
              )}
            </Text>
          </Fila>
          <Fila>
            <Num>3</Num>
            <Text>
              <label>margin-right:</label>
              <input
                type="text"
                name="margin-right"
                value={marginRight}
                onChange={(event) => setMarginRight(event.target.value)}
              />
              ;
              {validations === true ? (
                <p style={{ color: "red", margin: "0" }}>falta llenar</p>
              ) : (
                ""
              )}
            </Text>
          </Fila>
          <Fila>
            <Num>4</Num>
            <Text>
              <label>margin-bottom:</label>
              <input
                type="text"
                name="margin-bottom"
                value={marginBottom}
                onChange={(event) => setMarginBottom(event.target.value)}
              />
              ;
              {validations === true ? (
                <p style={{ color: "red", margin: "0" }}>falta llenar</p>
              ) : (
                ""
              )}
            </Text>
          </Fila>
          <Fila>
            <Num>5</Num>
            <Text>
              <label>margin-left:</label>
              <input
                type="text"
                name="margin-left"
                value={marginLeft}
                onChange={(event) => setMarginLeft(event.target.value)}
              />
              ;
              {validations === true ? (
                <p style={{ color: "red", margin: "0" }}>falta llenar</p>
              ) : (
                ""
              )}
            </Text>
          </Fila>
          <Fila>
            <Num>6</Num>
            <Text>﹜</Text>
          </Fila>
          <Fila>
            <Num>7</Num>
            <Text></Text>
          </Fila>
          <ButtonPlay type="submit">check answers</ButtonPlay>
        </form>
      </Container>
    </>
  );
}

export default Form;
