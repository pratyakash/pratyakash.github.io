import Logo from "../logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__elements">
        <div className="header__elements--items">Home</div>
      </div>
    </header>
  );
};

export default Header;
