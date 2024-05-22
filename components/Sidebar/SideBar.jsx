import { useState } from "react";
import PropTypes from "prop-types";
import { categories } from "../../constants/goods";
import css from "./SideBar.module.css";

const SideBar = ({ onSelect }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedItemIndex(index);
    onSelect(categories[index]);
  };

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Shops</p>
      <ul className={css.list}>
        {categories.map((category, index) => (
          <li
            className={`${css.item} ${
              selectedItemIndex === index ? css.selected : ""
            }`}
            key={index}
            onClick={() => handleSelect(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default SideBar;
