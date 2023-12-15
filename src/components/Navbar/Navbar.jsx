import React from 'react';
import Logo from '../../assets/logo.svg';
import { FiMenu, FiSearch, FiSettings, FiBell } from "react-icons/fi";
import ActiveLink from '../ActiveLink/ActiveLink';

const NavBar = () => {
    return (
      <nav className="bg-[#6941C6] dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Stack
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center gap-4 text-white text-xl">
              <FiSearch />
              <FiSettings />
              <FiBell />
              <img
                className="w-10 h-10 rounded-full"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                alt="user photo"
              ></img>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="toggle-btn"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu className="text-3xl text-white" />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:-ms-[400px]"
            id="navbar-sticky"
          >
            <ul className="nav-ul">
              <li className="nav-item">
                <ActiveLink className="nav-item" to="dashboard">
                  Home
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink to="/dashboard/users">Users</ActiveLink>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Tasks
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Reporting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;