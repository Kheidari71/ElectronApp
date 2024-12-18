import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="h-14 bg-gray-200 flex justify-center">
      <ul className="max-w-[768px] m-auto grid grid-cols-5 gap-4 h-full">
        <NavItem to={"/"} label={"Design"} />
        <NavItem to={"/gallery"} label={"Gallery"} />
        <NavItem to={"/video"} label={"Video"} />
        <NavItem to={"/building-solution"} label={"Building Solutions"} />
        <NavItem to={"/about-us"} label={"About Us"} />
      </ul>
    </nav>
  );
};

export default Navbar;
