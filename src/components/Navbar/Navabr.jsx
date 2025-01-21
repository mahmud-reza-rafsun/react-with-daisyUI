import React from "react";
import PropTypes from "prop-types";
import { BiDonateHeart } from "react-icons/bi";

const Navabr = () => {
  return (
    <div className="bg-base-500">
      <div class="navbar mx-auto max-w-7xl">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <a>Home</a>{" "}
              </li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a href="#" class="text-xl font-semibold">
            Green Journy Agro
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Items</summary>
                <ul class="px-5 py-3 w-52">
                  <li>
                    <a href="">hi</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">
            {" "}
            <BiDonateHeart /> Donate
          </a>
        </div>
      </div>
    </div>
  );
};

Navabr.propTypes = {};

export default Navabr;
