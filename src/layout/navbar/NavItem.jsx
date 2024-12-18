import {  NavLink } from "react-router";

const NavItem = ({label, to}) => {

  return (
    <li className="flex justify-center h-full">
      <NavLink to={to} className={({isActive})=>` h-full flex items-center px-2 ${isActive && "bg-orange-300 text-white"}`}>{label}</NavLink>
    </li>
  );
};

export default NavItem;
