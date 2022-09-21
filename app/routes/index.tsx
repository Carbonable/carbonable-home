import { Menu } from "~/components/Home/Menu";
import { B2B, Carousel, Values, Title, Video, WaitingList, Partners, Footer } from "~/components/Home/Section";
import Separator from "~/components/Separator/Separator";


export default function Index() {

  return (
      <>
        <Menu />
        <Title />
        <Video />
        <Carousel />
        <B2B />
        <Values />
        <Separator />
        <Partners />
        <WaitingList />
        <Footer />
      </>
  );
}
