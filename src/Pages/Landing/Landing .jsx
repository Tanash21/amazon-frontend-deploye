import React from "react";
import Product from "../../Components/product/Product";
import Category from "../../Components/Catagory/Category";
import CarouselEffect from "../../Components/Carousal/CarouselEffect";
import LayOut from "../../Components/LayOut/LayOut";

const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />   
    </LayOut>
  );
};

export default Landing;
