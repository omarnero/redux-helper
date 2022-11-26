import classes from "./CartItem.module.css";
import { countAction } from "../../store/count-slice";
import { useDispatch, useSelector } from "react-redux";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const items = useSelector((state) => state.count.items);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      countAction.addItems({
        id,
        price,
        title,
      })
    );
  };
  const removeHandler = () => {
    dispatch(countAction.removeItems(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          {items.quantity}
          <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
