import { Menu } from "~/components/Home/Menu";
import { B2B, Carousel, Title, Video, WaitingList } from "~/components/Home/Section";


export default function Index() {

  return (
      <>
        <Menu />
        <Title />
        <Video />
        <Carousel />
        <B2B />
        <WaitingList />
      </>
      
  );
}
