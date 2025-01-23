import Banner from "./banner/page";
import FlashSale from "./flashSale/page";
import RecentlySale from "./recentlySale/page";

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSale />
      <RecentlySale />
    </>
  );
}
