import React from "react";
import { categoryInfos } from "./categoryFullInfo.js";
import CategoryCard from "./CategoryCard.jsx";
import classes from "./category.module.css";

const Category = () => {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Category;
