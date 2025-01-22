import BassisIcon from "@/public/SVG/bassis";
import CabIcon from "@/public/SVG/cabIcon";
import PataIcon from "@/public/SVG/pata";
import React from "react";

const companyInfo = [
  {
    id: 1,
    titlle: "Accredited Member",
    img: [<BassisIcon key="b1" />, <PataIcon key="p1" />, <CabIcon key="c1" />],
  },
  {
    id: 2,
    titlle: "Verified by",
    img: [<BassisIcon key="b2" />, <PataIcon key="p2" />, <CabIcon key="c2" />],
  },
  {
    id: 3,
    titlle: "Our Partners",
    img: [<BassisIcon key="b3" />, <PataIcon key="p3" />, <CabIcon key="c3" />],
  },
  {
    id: 4,
    titlle: "BAuthorised by",
    img: [<BassisIcon key="b4" />, <PataIcon key="p4" />, <CabIcon key="c4" />],
  },
  {
    id: 5,
    titlle: "Registered At",
    img: [<BassisIcon key="b5" />, <PataIcon key="p5" />, <CabIcon key="c5" />],
  },
  {
    id: 6,
    titlle: "Certified By",
    img: [<BassisIcon key="b6" />, <PataIcon key="p6" />, <CabIcon key="c6" />],
  },
];

const AsponsorBy = () => {
  return (
    <footer className="py-11 xl:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {companyInfo.map((data, i) => (
            <div key={i}>
              <h3 className="text-sm xl:text-lg font-Roboto font-semibold mb-5 lg:mb-7 text-white_color">
                {data.titlle}
              </h3>
              <div className="flex justify-start items-center gap-4 mb-9 last:mb-0 xl:mb-0">
                {data.img.map((Icon, idx) => (
                  <div key={idx}>{Icon}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default AsponsorBy;
