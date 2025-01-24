import Banner from "./banner/page";
import BuisnessPartner from "./business_partner/page";
import Categories from "./categories/page";
import ClientTestimonials from "./client_testimonials/page";
import FlashSale from "./flashSale/page";
import MoreSales from "./more_sales/page";
import PikariItems from "./pikarItems/page";
import RecentlySale from "./recentlySale/page";
import SelectPikar from "./selectPikar/page";
import ServicesPart from "./services/page";

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSale />
      <RecentlySale />
      <Categories />
      <SelectPikar />
      <PikariItems />
      <MoreSales />
      <ServicesPart />
      <ClientTestimonials />
      <BuisnessPartner />
    </>
  );
}
