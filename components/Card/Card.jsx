//import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSelector } from "../../redux/Filter.selectors";
import {
  addFavorite,
  deleteFavorite,
  updateFavoriteQuantity,
} from "../../redux/Slice";
import css from "./Card.module.css";

const Card = ({ _id, name, price, showQuantityInput }) => {
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  const favorite = favorites.find((favorite) => favorite._id === _id);
  const amount = favorite ? favorite.quantity : 1;

  const isFavorite = Boolean(favorite);

  const handleLikeClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(_id));
    } else {
      dispatch(addFavorite({ _id, name, price }));
    }
  };

  const handleInput = (e) => {
    const quantity = parseInt(e.currentTarget.value, 10);
    if (quantity > 0) {
      dispatch(updateFavoriteQuantity({ id: _id, quantity }));
    }
  };

  return (
    <li className={css.item}>
      <div className={css.description}>
        <span className={css.name}>{name}</span>
        <span className={css.price}>{price}</span>
      </div>
      {showQuantityInput && (
        <input
          className={css.input}
          type="number"
          value={amount}
          onChange={handleInput}
        />
      )}
      <button className={css.button} onClick={handleLikeClick}>
        {isFavorite ? "Remove from Card" : "Add to Card"}
      </button>
    </li>
  );
};

Card.propTypes = {
  showQuantityInput: PropTypes.bool,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
