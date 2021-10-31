import { ButtonPlay } from "../../pages/MarginPage/MarginPage.styled";
import { Container, Fila, Num, Text } from "./Form.styled";
import { ImCss3 } from "react-icons/im";

function Form({ sendData, validations, data }) {
  console.log(data);

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
            <Num>
              <ImCss3 style={{ color: "rgb(0,158,251" }} />
            </Num>
            <Text
              style={{
                color: "#19c555",
                display: "flex",
                alignItems: "center",
              }}
            >
              style.css
            </Text>
          </Fila>
          <Fila>
            <Num>1</Num>
            <Text>.box﹛</Text>
          </Fila>

          {data.map((e, i) => (
            <Fila key={i}>
              <Num>{(i += 2)}</Num>
              <Text>
                <label>{e.name}</label>
                <input
                  type="text"
                  name={e.name}
                  value={e.value}
                  onChange={(event) => e.setValue(event.target.value)}
                />
              </Text>
            </Fila>
          ))}

          <Fila>
            <Num>{data.length + 2}</Num>
            <Text>﹜</Text>
          </Fila>
          <Fila>
            <Num>{data.length + 3}</Num>
            <Text>
              {validations === true ? (
                <p
                  style={{
                    color: "#FF6747",
                    margin: "0",
                    fontWeight: "lighter",
                  }}
                >
                  Faltan campos por llenar
                </p>
              ) : (
                ""
              )}
            </Text>
          </Fila>
          <ButtonPlay type="submit">check answers</ButtonPlay>
        </form>
      </Container>
    </>
  );
}

export default Form;
