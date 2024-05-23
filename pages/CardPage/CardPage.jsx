// import React from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/CardsList/CardList";
import Form from "../../components/Form/Form";
import { favoritesSelector } from "../../redux/Filter.selectors";
import Button from "../../components/Button/Button";
import css from "./CardPage.module.css";

const CardPage = () => {
  const favorites = useSelector(favoritesSelector);
  const totalAmount = favorites.reduce((initialValue, favorite) => {
    return initialValue + +favorite.price * favorite.quantity;
  }, 0);
  //console.log(totalAmount);
  return (
    <>
      <div className={css.section}>
        <Form />
        <CardList goods={favorites} showQuantityInput={true} />
      </div>
      {favorites.length > 0 && (
        <div className={css.wrapper}>
          <span className={css.total}>Total Sum: {totalAmount}</span>
          <Button />
        </div>
      )}
    </>
  );
};

export default CardPage;
