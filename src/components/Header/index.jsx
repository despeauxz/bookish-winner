const Header = () => (
  <header>
    <div className="left-section">
      <div className="logo">
        <a href="/">
          <img src="/img/logo.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a className="animate__delay-4s active animate__animated animate__bounce" href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="right-section">
      <button className="contact-btn">
        Contact Us
      </button>
      <button className="login-btn">
        <span>
          <img src="/img/lock.png" alt="Lock" />
        </span>
        Login
      </button>
    </div>
  </header>
);

export default Header;
