import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from "react-icons/bi";
import NavItem from "./NavItem";

const defaultIconSize = "1.875rem";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = [
  { label: "Home", icon: <BiHomeAlt size={defaultIconSize} />, active: true },
  { label: "Movies", icon: <BiMoviePlay size={defaultIconSize} /> },
  { label: "About", icon: <BiInfoCircle size={defaultIconSize} /> },
];

const NavItemsContainer = () => (
  <>
    {items.map((item, index) => (
      <NavItem item={item} key={index} />
    ))}
  </>
);
const Index = () => {
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
          Phimmoi.net
        </h4>
      </div>
      <ul className="mx-4 my-2">
        <NavItemsContainer />
      </ul>
    </nav>
  );
};

export default Index;
