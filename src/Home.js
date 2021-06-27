import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="
        https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="the lean startup"
          price={11.96}
          rating={5}
          image="
          https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321341"
          title="kenwood"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="samsung"
          price={199.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="23445930"
          title="amazon echo"
          price={98.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="3254354353"
          title="apple ipad"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="lg"
          price={1094.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
