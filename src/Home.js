import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Jan-ART/Gateway/Clearance/ATF/V2/ClearanceStore_GW_PCBunk_50._CB662280195_.jpg
          "
          alt=""
        />

        <div className="home_row">
          <Product
            id={96434356}
            title="As a Man Thinketh Paperback – 6 November 2017 "
            price={23.56}
            image="https://images-na.ssl-images-amazon.com/images/I/51tiopcLhuS._SX258_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={34563}
            title="Redmi Note 10 Pro (Dark Night, 6GB RAM, 128GB Storage) -120hz Super Amoled 
           Display|64MP with 5mp Super Tele- Macro, Normal"
            price={23.56}
            image="https://images-na.ssl-images-amazon.com/images/I/71hyDUT-n6S._SY445_.jpg"
            rating={9}
          />
        </div>
        <div className="home_row">
          <Product
            id={12345}
            title="Amazfit GTS2 Mini Smart Watch with 1.55
        "
            price={23.56}
            image="https://m.media-amazon.com/images/I/61j76ZaQCRS._AC_UY327_FMwebp_QL65_.jpg"
            rating={6}
          />
          <Product
            id={123498}
            title="Artis PS-600VA 600VA Line Interactive UPS for Personal Computers"
            price={23.56}
            image="https://images-na.ssl-images-amazon.com/images/I/714mJbdF3PL._SX569_.jpg"
            rating={5}
          />
          <Product
            id={6421}
            title="HP 15 Intel Pentium Gold 6405U Processor Entry Level 15.6-inch (39.62 cms) "
            price={23.56}
            image="https://images-na.ssl-images-amazon.com/images/I/51jPUwqQTFL._SY355_.jpg
         "
            rating={5}
          />
          {/*product*/}
          {/*product*/}
          {/*product*/}
        </div>
        <div className="home_row">
          {/*product*/}
          <Product
            id={90214}
            title="Zebronics Computer Multimedia 2.1 Speaker with Bluetooth, SD Card, USB, AUX."
            price={23.56}
            image="https://m.media-amazon.com/images/I/816rruNShkL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
