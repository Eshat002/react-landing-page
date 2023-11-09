import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import Logo from '../../img/logo.png'
import Logo from "../../img/logo.png";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (event) => {
    event.preventDefault();

    // Remove "active" class from all menu items
    const menuItems = document.querySelectorAll(".menu");
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    // Add "active" class to the clicked menu item
    event.target.classList.add("active");
  };

  const handleLogoContainerClick = (event) => {
    window.location.href = "";
  };
  const handleMenuBtn = (event) => {
    setIsMenuOpen((prevState) => !prevState);
    const menu_btn_container = document.querySelector(".menu-btn-container");
    menu_btn_container.classList.toggle("open");
  };

  useEffect(() => {
    function addClassOnResize() {
      const checkSize = () => {
        const element = document.getElementById("navbar");

        if (element) {
          if (window.innerWidth < 991.2) {
            element.classList.add("sticky-top");
          } else {
            element.classList.remove("sticky-top");
          }
        }
      };
      //initial check
      checkSize();

      // Add event listener for window resize
      window.addEventListener("resize", checkSize);

      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener("resize", checkSize);
      };
    }

    addClassOnResize();
  }, []);

  return (
    <div id="navbar" className="navbar">
      <div className="container-fluid">
        <div
          onClick={handleLogoContainerClick}
          style={{ cursor: "pointer" }}
          className="logo-container"
        >
          <img style={{ marginTop: "-5px" }} src={Logo} alt="logo" />
          <span style={{ marginTop: "35px !important" }} className="ms-1">
            Silly
          </span>
        </div>
        <div className="menu-btn-container">
          <div className="menus">
            <ul>
              <li>
                <a
                  onClick={handleMenuItemClick}
                  className="menu active"
                  href=""
                >
                  Home{" "}
                </a>{" "}
              </li>
              <li>
                <a onClick={handleMenuItemClick} className="menu" href="">
                  Products{" "}
                </a>
              </li>
              <li>
                <a onClick={handleMenuItemClick} className="menu" href="">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="button-container">
            <button className="login-btn">Login</button>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
        <div style={{ marginTop: "-15px" }} className="icon-container d-none">
          <button
            onClick={handleMenuBtn}
            className="menu-btn"
            style={{ background: "transparent", border: "none" }}
          >
            {isMenuOpen ? (
              <MdClose size={30} color="#603913" />
            ) : (
              <MdMenu className="menu-icon" size={30} color="#603913" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
