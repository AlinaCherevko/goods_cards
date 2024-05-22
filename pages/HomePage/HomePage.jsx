// import React from "react";
import { useEffect, useState } from "react";
import CardList from "../../components/CardsList/CardList";
import SideBar from "../../components/Sidebar/SideBar";
import {
  useGetAllDrinksQuery,
  useGetAllMealQuery,
  useGetAllSweetsQuery,
} from "../../redux/servises";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [goods, setGoods] = useState([]);

  const { data: meal } = useGetAllMealQuery();
  const { data: drinks } = useGetAllDrinksQuery();
  const { data: sweets } = useGetAllSweetsQuery();

  useEffect(() => {
    if (selectedCategory === "Meals") {
      if (meal) {
        setGoods(meal);
      }
    } else if (selectedCategory === "Drinks") {
      if (drinks) {
        setGoods(drinks);
      }
    } else if (selectedCategory === "Sweets") {
      if (sweets) {
        setGoods(sweets);
      }
    } else {
      setGoods(meal); // Очистити дані, якщо категорія не вибрана
    }
  }, [selectedCategory, meal, drinks, sweets]);

  const onSelect = (value) => {
    setSelectedCategory(value);
    console.log(selectedCategory);
  };

  return (
    <div className={css.wrapper}>
      <SideBar className={css.sidebar} onSelect={onSelect} />
      <CardList className={css.list} goods={goods} />
    </div>
  );
};

export default HomePage;
