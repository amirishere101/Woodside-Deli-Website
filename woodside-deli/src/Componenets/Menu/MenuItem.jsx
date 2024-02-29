import styles from "./MenuItem.module.css";
import PropTypes from "prop-types";
function MenuItem(props) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        {props.title}{" "}
        <span className={styles.price}>
          {props.price == null ? "" : "("}
          {props.price}
          {props.price == null ? "" : ")"}
        </span>
      </h3>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.additions}>{props.additions}</p>
    </div>
  );
}

MenuItem.PropTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  additions: PropTypes.string,
};
export default MenuItem;
