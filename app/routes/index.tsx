import { Menu } from "~/components/Home/Menu";
import { Carousel, Title, Video, WaitingList } from "~/components/Home/Section";


export default function Index() {

  return (
      <>
        <Menu />
        <Title />
        <Video />
        <Carousel />
        <WaitingList />
      </>
      
  );
}
