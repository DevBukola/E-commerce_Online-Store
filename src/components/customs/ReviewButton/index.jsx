export const ReviewButton = ({ label, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};