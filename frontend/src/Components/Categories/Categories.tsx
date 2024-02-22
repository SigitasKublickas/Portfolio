import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="categories center">
      <ul className="flex flex-row center">
        <li className="p-2 category">
          <Link to={""}>Pramogos</Link>
          <ul className="invisible-container container">
            <li>
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="p-2 category">
          <Link to={""}>Sportas</Link>
          <ul className="invisible-container container">
            <li>
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="p-2 category">
          <Link to={""}>Transportas</Link>
          <ul className="invisible-container container">
            <li>
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="p-2 category">
          <Link to={""}>Treniruokliai</Link>
          <ul className="invisible-container container">
            <li>
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to={""}>Turizmas</Link>
              <ul>
                <li>Batai</li>
                <li>Slepetes</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
