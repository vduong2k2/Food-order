import { currencyFormatting } from "../util/formatting";

export default function CartItem({ increment, decrement, ...props }) {
  return (
    <li className="cart-item">
      <p>
        {props.name} - {props.quantity} x{" "}
        {currencyFormatting.format(props.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={decrement}>-</button>
        <span>{props.quantity}</span>
        <button onClick={increment}>+</button>
      </p>
    </li>
  );
}
