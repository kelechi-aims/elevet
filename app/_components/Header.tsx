import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-primary-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
