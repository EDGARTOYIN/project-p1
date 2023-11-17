import ReactLogo from "../assets/Group.png";
function Header() {
  return (
    <header>
      <nav className="bg-nav-color flex items-center justify-between p-8">
        <div className="flex gap-2 items-center">
          <img src={ReactLogo}></img>
          <h1 className="text-blue-custom font-bold text-[1.2rem]">
            ReactFacts
          </h1>
        </div>
        <div>
          <p className="text-nav-text text-[1rem] font-semibold">
            React Course - Project 1
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
