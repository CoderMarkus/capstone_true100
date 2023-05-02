import dynamic from "next/dynamic";
import { Wrapper } from "../components/styles";

const DynamicDJTodoList = dynamic(() => import("../components/DJTodoList"), {
  ssr: false,
});

function HomePage() {
  return (
    <Wrapper>
      <div>
        <DynamicDJTodoList />
      </div>
    </Wrapper>
  );
}

export default HomePage;
