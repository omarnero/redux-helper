import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.count.totalQuantiy);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
