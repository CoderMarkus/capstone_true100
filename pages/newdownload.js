import { CldImage } from "next-cloudinary";
import { Wrapper, Uber, Orderli, Lila } from "../components/styles";
import LinkComponent from "../components/NavItem.js";

function Pls() {
  return (
    <Wrapper>
      <div>
        <Uber>Top 100 meistgespielten Songs</Uber>
        <CldImage
          width="390"
          height="400"
          src="Top100_p9sbap.png"
          alt="<Top 100>"
        ></CldImage>

        <div>
          <LinkComponent />
        </div>
      </div>
    </Wrapper>
  );
}

export default Pls;
