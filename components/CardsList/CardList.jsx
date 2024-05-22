// import React from "react";
import PropTypes from "prop-types";
import css from "./CardList.module.css";

const CardList = ({ goods }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {goods &&
          goods.map(({ _id, name, price }) => (
            <li className={css.item} key={_id}>
              <div className={css.description}>
                <span className={css.name}>{name}</span>
                <span className={css.price}>{price}</span>
              </div>
              <button className={css.button}>Add to Card</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

CardList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
