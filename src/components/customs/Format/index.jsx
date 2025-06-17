import "./index.css";

const Format = ({ children, height }) => {
  return <div className={`horizontal ${height}`}>{children}</div>;
};

export default Format;