import Navbar from "../Navbar/Navbar";
import Categories from "../Categories/Categories";
import "./Header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <Navbar />
      <Categories />
    </header>
  );
};

export default Header;
