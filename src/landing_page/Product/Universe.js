import React from "react";
import Hero from "./Hero";

import LeftSection from "./leftsection";
import RightSection from "./rightsection";
import Universal from "./Universal";


function Universe() {
  return (
    <>
   <Hero/>
    <LeftSection
    imageURL="media/images/products-kite.png"
     ProductName="Kite"
      ProductDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      tryDemo=""
     learnMore=""
     googleplay=""
     appStore=""
    />
    <RightSection 
       imageURL="media/images/products-console.png"
     ProductName="Console"
      ProductDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.

"
     learnMore=""
    />
    <LeftSection
       imageURL="media/images/products-coin.png"
     ProductName="Coin"
      ProductDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

"
     learnMore=""
         googleplay=""
     appStore=""
    
    />
    <RightSection
       imageURL="media/images/products-kiteconnect.png"
     ProductName="Kite Connect API"
      ProductDesription=" Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.

"
     learnMore=""
    />
    <LeftSection
       imageURL="media/images/varsity-products.png"
     ProductName="Varsity mobile"
      ProductDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

"
      tryDemo=""
     learnMore=""
     googleplay=""
     appStore=""
    />

    <p className="text-center  mt-3 mb-5  " style={{fontSize:"20px"}}>Want to know more about our technology stack? Check out the <a href="Zerodha.tech "></a> blog.</p>

<Universal/>


    </>

  );
}

export default Universe;