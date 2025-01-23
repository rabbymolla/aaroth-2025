import Banner from "./banner/page";
import Categories from "./categories/page";
import FlashSale from "./flashSale/page";
import PikariItems from "./pikarItems/page";
import RecentlySale from "./recentlySale/page";

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSale />
      <RecentlySale />
      <Categories />
      <PikariItems />
    </>
  );
}
