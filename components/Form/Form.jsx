// import React from "react";
import css from "./Form.module.css";

const Form = () => {
  return (
    <div className={css.form}>
      <div className={css.wrapper}>
        <label className={css.label}>Name</label>
        <input type="text" name="name" className={css.input}></input>
      </div>
      <div className={css.wrapper}>
        <label className={css.label}>Email</label>
        <input type="text" name="email" className={css.input}></input>
      </div>
      <div className={css.wrapper}>
        <label className={css.label}>Phone</label>
        <input type="text" name="phone" className={css.input}></input>
      </div>
      <div className={css.wrapper}>
        <label className={css.label}>Address</label>
        <input type="text" name="address" className={css.input}></input>
      </div>
    </div>
  );
};

export default Form;
