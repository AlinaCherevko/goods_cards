// import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import css from "./CardList.module.css";

const CardList = ({ goods, showQuantityInput }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {goods &&
          goods.map(({ _id, name, price }) => (
            <Card
              key={_id}
              _id={_id}
              name={name}
              price={price}
              showQuantityInput={showQuantityInput}
            />
          ))}
      </ul>
    </div>
  );
};

CardList.propTypes = {
  showQuantityInput: PropTypes.bool,
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
