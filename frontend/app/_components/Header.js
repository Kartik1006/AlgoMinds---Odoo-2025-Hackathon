import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
//import Account from "./Account";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8  bg-accent-rust/95 border-b-2 border-accent-rust/60 shadow-md">
      {/* //F4EDDD */}
      <div className="flex justify-between items-center max-w-7xl mt-3 pb-3 mx-auto">
        <Logo location="header" />
        <Navigation />
        {/* <Account /> */}
      </div>
    </header>
  );
}

export default Header;
