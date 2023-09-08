import React from "react";
import "./SideBar.css";
import { AiFillHome, AiOutlinePoweroff } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const SideBar = () => {

  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    Cookies.remove("access_token");
    navigate("/Login");
  };
  return (
    <div>
      <aside className="sidebar">
        <div>
          <a
            href="/"
            class="_246b402a-index_navigation-logo"
            data-name="editor-menu-g-logo"
          >
            <figure class="fl8qkup">
              <picture>
                <img
                  src="https://denali-static.grammarly.com/files/0e7d074fbf7cb08e59c55b4b0683774d/logo.png"
                  alt="Writeophonic logo"
                  width="154"
                />
              </picture>
            </figure>
          </a>
        </div>
        <div>
          <ul className="links">
            <li>
              <Link to="/dashboard">
                <i>
                  <FaHome size={25} />
                </i>
                <span>My Writeophonic</span>
              </Link>
            </li>
            <li>
              <Link to="/trash">
                <i>
                  <BsTrash3 size={25} />
                </i>
                <span>Trash</span>
              </Link>
            </li>
            <li>
              <a href="">
                <i>
                  <HiOutlineCube size={25} />
                </i>
                <span>Apps</span>
              </a>
            </li>
            <li
              style={{ position: "absolute", bottom: "55px" }}
              onClick={(e) => {
                handleLogout(e);
              }}
            >
              <a href="">
                <i>
                  <AiOutlinePoweroff size={25} />
                </i>
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
