import { useContext } from "react";
import { currencyFormatting } from "../util/formatting";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
export default function CheckOut() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckOut();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form>
        <h2>Thanh Toán</h2>
        <p>Tổng Tiền: {currencyFormatting.format(cartTotal)}</p>

        <Input label="Họ và tên" id="full name" type="text"></Input>
        <Input label="E-mail" id="e-mail" type="text"></Input>
        <Input label="Địa chỉ" id="street" type="text"></Input>
        <div className="control-row">
          <Input label="Mã thành phố" id="code" type="type"></Input>
          <Input label="Thành phố" id="city" type="type"></Input>
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Đóng
          </Button>
          <Button>Đặt Hàng</Button>
        </p>
      </form>
    </Modal>
  );
}
