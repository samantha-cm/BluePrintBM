import { DivTitle } from "./Title.styled";
import box from "../../box-free/box.png";

const Title = () => {
  return (
    <DivTitle>
      <h2 translate="no">Box Model Blueprint</h2>
      <img src={box} alt="game" />
    </DivTitle>
  );
};

export default Title;
