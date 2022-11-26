import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Notification from "./components/UI/Notification";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiAction } from "./store/ui-slice";
function App() {
  const show = useSelector((state) => state.ui.showCard);
  const cart = useSelector((state) => state.count.items);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "sending",
          message: "Sending data happend",
        })
      );
      const response = await fetch(
        "https://redux-6db09-default-rtdb.firebaseio.com//cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        dispatch(
          uiAction.showNotification({
            status: "error",
            title: "Error",
            message: "Error data happend",
          })
        );
        throw new Error("send data cart falied ");
      } else {
        const responseData = await response.json();
        dispatch(
          uiAction.showNotification({
            status: "success",
            title: "Success",
            message: "Success send data",
          })
        );
      }
    };
    sendData().catch((err) => {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Error data happend",
        })
      );
    });
  }, [cart]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
