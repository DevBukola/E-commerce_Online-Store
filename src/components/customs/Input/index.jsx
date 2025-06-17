import styles from "./index.module.css";
function Input({ id, label, ...props }) {
  return (
    <p className={styles.inputGroup}>
      <label htmlFor={id}> {label} </label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}

export default Input;
