import React, { Fragment } from "react";
import shortid from "shortid";
import { NavLink, Link } from "react-router-dom";

// Wrapper
const Wrapper = ({ children, className }) => (
 <div className={`wrapper${className ? " " + className : ""}`}>{children}</div>
);

// FixWide
const FixWide = ({ children, className = "" }) => (
 <div className={`container${className ? " " + className : ""}`}>
  <div className="row">
   <div className="col-12">{children}</div>
  </div>
 </div>
);

// Header
const Header = ({ children, className }) => (
 <header className={`header${className ? " " + className : ""}`}>
  {children}
 </header>
);

// Logo
const Logo = ({ children, className = "", to = "/" }) => (
 <Link to={to} className={`logo${className ? " " + className : ""}`}>
  {children}
 </Link>
);

// Nav
const Nav = ({ children, className = "" }) => (
 <nav className={`def-nav${className ? " " + className : ""}`}>{children}</nav>
);

// LinksList
const LinksList = ({ data, className = "" }) => (
 <ul className={`links-list${className ? " " + className : ""}`}>
  {data.map((it) => (
   <li className="__it" key={shortid.generate()}>
    <NavLink
     to={"/" + it.hrefTo}
     className="nav-link"
     activeClassName="current"
    >
     {it.label}
    </NavLink>
   </li>
  ))}
 </ul>
);

// EnterSystemLinks
const EnterSystemLinks = ({ elementArray, className = "" }) => (
 <div className={`enter-system-links${className ? " " + className : ""}`}>
  {elementArray.map((item, index) => {
   return (
    <Fragment key={shortid.generate()}>
     {item}
     {index < elementArray.length - 1 ? (
      <span className="__spacer">/</span>
     ) : null}
    </Fragment>
   );
  })}
 </div>
);

// HeaderLinks
const HeaderLinks = ({ children, className = "" }) => (
 <div className={`header-links${className ? " " + className : ""}`}>
  <div className="__inner">{children}</div>
 </div>
);

// PageTitle
const PageTitle = ({ children, className = "" }) => (
 <h1 className={`page-title${className ? " " + className : ""}`}>{children}</h1>
);

// SvgSprite
const SvgSprite = ({ className = "", height, iconName, viewBox, width }) => (
 <svg
  className={`svg-sprite${className ? " " + className : ""}`}
  height={height}
  viewBox={viewBox}
  width={width}
 >
  <use xlinkHref={`assets/img/svg/f-icon/all.svg#${iconName}`}></use>
 </svg>
);

// hamburger
const hamburger = (
 <SvgSprite
  className="icon-hamburger"
  height="13"
  iconName="icon-hamburger"
  viewBox="0 0 18 13"
  width="18"
 />
);

// close
const close = (
 <SvgSprite
  className="icon-close"
  height="13"
  iconName="icon-close"
  viewBox="0 0 13 13"
  width="13"
 />
);

// HamburgerMenu
function HamburgerMenu({ className = "", icon, onClick = null }) {
 return (
  <span
   className={`hamburger-menu${className ? " " + className : ""}`}
   onClick={onClick}
  >
   {icon}
  </span>
 );
}

// SubSectionTitle
const SubSectionTitle = ({ children, className = "" }) => (
 <h2 className={`sub-section-title${className ? " " + className : ""}`}>
  {children}
 </h2>
);

// SubSectionSescr
const SubSectionDescr = ({ children, className = "" }) => (
 <p className={`sub-section-descr${className ? " " + className : ""}`}>
  {children}
 </p>
);

class Article extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  const { children, className } = this.props;
  return (
   <article className={`article${className ? " " + className : ""}`}>
    {children}
   </article>
  );
 }
}

export {
 Wrapper,
 FixWide,
 Header,
 Logo,
 Nav,
 LinksList,
 SvgSprite,
 EnterSystemLinks,
 HeaderLinks,
 HamburgerMenu,
 PageTitle,
 SubSectionTitle,
 SubSectionDescr,
 Article,
};
