import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
      <div>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive ? " bg-gray-100 bg-opacity-20 rounded-md py-2 px-3" : ""
          }
        >
          {children}
        </NavLink>
      </div>
    );
};

export default ActiveLink;