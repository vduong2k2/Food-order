import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food order logo" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly>Giỏ hàng (0)</Button>
      </nav>
    </header>
  );
}
