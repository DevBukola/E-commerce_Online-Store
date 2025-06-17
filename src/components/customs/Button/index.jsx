import styles from './index.module.css'

function Button({ children, onlyText, className, ...props }) {
  let styleClasses = onlyText ? styles.textBtn : styles.btn;
  styleClasses += " " + className;

  return (
    <button className={styleClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
