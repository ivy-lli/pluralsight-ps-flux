import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { link: '/', name: 'Home' },
    { link: '/courses', name: 'Courses' },
    { link: '/about', name: 'About' },
  ]
  const activeStyle = { color: 'orange' };
  return (
    <nav>
      {links.map((link, i) => (
        <>
          <NavLink key={link.link} exact to={link.link} activeStyle={activeStyle}>{link.name}</NavLink>
          {i < links.length - 1 ? ' | ' : null}
        </>
      ))}
    </nav>
  );
}

export default Header;