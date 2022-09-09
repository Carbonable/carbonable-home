import { Menu } from "~/components/Home/Menu";


export default function Index() {

  return (
      <>
        <Menu />
        <div className="block bg-home-header w-full h-[960px] bg-no-repeat bg-cover text-center">
          <div className="font-americana text-5xl pt-48 w-9/12 mx-auto uppercase">
            OUTSTANDING LONG TERM YIELDS FOR INVESTORS & THE PLANET
          </div>
          <div className="font-trash text-bold text-green text-2xl w-6/12 mx-auto mt-8">
            BEST VALUE INVESTMENTS VALUES THE PLANET
          </div>
        </div>
      </>
      
  );
}
