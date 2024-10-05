import React, { useEffect } from "react";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import ImageSlider from "../components/slider";
import ContactDetails from "../components/ContactDetails";

function HomePage() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML =
      `html {
      scroll-behavior: smooth;
    }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    }
  }, []);

  useEffect(() => {
    const card = document.querySelector(".Card");
    if (card) {
      card.style.display = "flex";
      card.style.flexWrap = "wrap";
      card.style.justifyContent = "center";
    }
  }, []);

  return (
    <div className="App">
      {/* Making the header fixed at the top */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, backgroundColor: '#fff' }}>
        <Head />
        <div className="mt-2 space-y-2" id="disclosure-1 flex">
          <ul className="flex bg-white">
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">ALL JEWELLERY</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">RINGS</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">NECKLACE</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">CHAIN</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">BRACELET</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">GIFTING</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">PARENTS</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">CHILDREN</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">LOVE</li>
            <li href="#" className="block rounded-lg py-2 pl-20 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">MORE</li>
          </ul>
        </div>
      </div>

      {/* Adding padding to the top so that content isn't hidden behind the fixed header */}
      <div style={{ paddingTop: '120px' }}>
        <ImageSlider />
        <Explore />
        <Hero />
        <ContactDetails />
      </div>
    </div>
  );
}

export default HomePage
