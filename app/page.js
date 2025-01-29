import ScrollWrapper from "@/components/animation/paje";
import Banner from "../components/banner/page";
import BlogPart from "./blogs/page";
import BuisnessPartner from "../components/business_partner/page";
import Categories from "./categories/page";
import ClientTestimonials from "../components/client_testimonials/page";
import FlashSale from "../components/flashSale/page";
import HolSalesItems from "../components/holsale_items/page";
import MoreSales from "../components/more_sales/page";
import NewArrivals from "../components/new_arrivals/page";
import NewsLetters from "../components/news_letters/page";
import PikariItems from "../components/pikarItems/page";
import RecentlySale from "../components/recentlySale/page";
import SelectPikar from "../components/selectPikar/page";
import ServicesPart from "../components/services/page";

export default function Home() {
  return (
    <>
      <Banner />
      <ScrollWrapper>
        <FlashSale />
      </ScrollWrapper>
      <ScrollWrapper>
        <RecentlySale />
      </ScrollWrapper>
      <ScrollWrapper>
        <Categories />
      </ScrollWrapper>
      <ScrollWrapper>
        <SelectPikar />
      </ScrollWrapper>
      <ScrollWrapper>
        <NewArrivals />
      </ScrollWrapper>
      <ScrollWrapper>
        <HolSalesItems />
      </ScrollWrapper>
      <ScrollWrapper>
        <PikariItems />
      </ScrollWrapper>
      <ScrollWrapper>
        <MoreSales />
      </ScrollWrapper>
      <ScrollWrapper>
        <BlogPart />
      </ScrollWrapper>
      <ScrollWrapper>
        <ServicesPart />
      </ScrollWrapper>
      <ScrollWrapper>
        <ClientTestimonials />
      </ScrollWrapper>
      <ScrollWrapper>
        <BuisnessPartner />
      </ScrollWrapper>
      <ScrollWrapper>
        <NewsLetters />
      </ScrollWrapper>
    </>
  );
}
