import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header-block1">
        <div className="header-block1-left">
          <div>
            <FaBars className="fabars" />
          </div>
          <input type="search" placeholder="Rechercher" />
        </div>
        <div className="header-block1-right">
          <div className="user-profil">
            <FaUser />
          </div>
          <div className="user-name">User Name</div>
        </div>
      </div>
      <div className="header-block2">
        <div className="header-block2-left">
          <h2>User Name</h2>
          <p>Profil</p>
        </div>
        <div className="header-block2-right">
          <div className="user-name2">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
