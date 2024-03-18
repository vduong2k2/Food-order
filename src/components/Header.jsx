import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food order logo" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <button>Giỏ hàng (0)</button>
      </nav>
    </header>
  );
}
