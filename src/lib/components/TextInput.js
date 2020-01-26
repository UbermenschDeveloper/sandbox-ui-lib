import React from "react";
import css from "./TextInput.module.css";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  helpText
}) => (
  <div className={css["simple-form-group"]}>
    {label && <label className={["simple-text-label"]}>{label}</label>}
    <input
      type={type}
      className={css["simple-text-input"]}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
    {helpText && <small className={css["simple-form-text"]}>{helpText}</small>}
  </div>
);

export default TextInput;
