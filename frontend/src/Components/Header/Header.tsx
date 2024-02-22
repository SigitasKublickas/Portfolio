import Navbar from "../Navbar/Navbar";
import Categories from "../Categories/Categories";
import "./Header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Navbar />
      <Categories />
    </header>
  );
};

export default Header;
