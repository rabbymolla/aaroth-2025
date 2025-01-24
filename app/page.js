import Banner from "./banner/page";
import BlogPart from "./blogs/page";
import BuisnessPartner from "./business_partner/page";
import Categories from "./categories/page";
import ClientTestimonials from "./client_testimonials/page";
import FlashSale from "./flashSale/page";
import MoreSales from "./more_sales/page";
import NewArrivals from "./new_arrivals/page";
import NewsLetters from "./news_letters/page";
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
      <NewArrivals />
      <PikariItems />
      <MoreSales />
      <BlogPart />
      <ServicesPart />
      <ClientTestimonials />
      <BuisnessPartner />
      <NewsLetters />
    </>
  );
}
