import { CldImage } from "next-cloudinary";
import { Wrapper, Uber, Orderli, Lila } from "../components/styles";
import LinkComponent from "../components/NavItem.js";

function Pls() {
  return (
    <Wrapper>
      <div>
        <Uber>Top 100 meistgespielten Songs</Uber>
        <CldImage
          width="600"
          height="600"
          src="v1682535952/7d1213648e5d8a83ffffa0f02.png"
          alt="<Alt Text>"
        />
        <div>
          <LinkComponent />
        </div>
      </div>
    </Wrapper>
  );
}

export default Pls;
