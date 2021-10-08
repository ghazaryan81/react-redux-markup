import React, { Component, forwardRef } from "react";
import { NavLink, Link } from "react-router-dom";

export const toKebabCase = (str) =>
 str &&
 str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  .map((x) => x.toLowerCase())
  .join("-");

export function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Main = (props) => <main {...props}>{props.children}</main>;
export const Header = (props) => <header {...props}>{props.children}</header>;
export const Footer = (props) => <footer {...props}>{props.children}</footer>;
export const Img = ({ alt = "", title = "", ...props }) => (
 <img alt={alt} title={title} {...props} />
);
export const Nav = (props) => <nav {...props}>{props.children}</nav>;
export const Ul = (props) => <ul {...props}>{props.children}</ul>;
export const Li = (props) => <li {...props}>{props.children}</li>;
export const Btn = (props) => <button {...props}>{props.children}</button>;
export const Label = (props) => <label {...props}>{props.children}</label>;
export const Span = (props) => <span {...props}>{props.children}</span>;
export const P = (props) => <p {...props}>{props.children}</p>;
export const Div = (props) => <div {...props}>{props.children}</div>;
export const H1 = (props) => <h1 {...props}>{props.children}</h1>;
export const H2 = (props) => <h2 {...props}>{props.children}</h2>;
export const H3 = (props) => <h3 {...props}>{props.children}</h3>;
export const H4 = (props) => <h4 {...props}>{props.children}</h4>;
export const Form = (props) => <form {...props}>{props.children}</form>;
export const Figure = (props) => <figure {...props}>{props.children}</figure>;

export const Figcaption = (props) => (
 <figcaption {...props}>{props.children}</figcaption>
);
export const Article = (props) => (
 <article {...props}>{props.children}</article>
);

export const SvgSprite = ({
 className = "",
 height,
 iconName,
 viewBox,
 width,
}) => (
 <svg
  className={`svg-sprite${className ? " " + className : ""}`}
  height={height}
  viewBox={viewBox}
  width={width}
 >
  <use xlinkHref={`assets/img/svg/f-icon/all.svg#${iconName}`}></use>
 </svg>
);

export const SvgSpriteMenuIcons = ({
 className = "",
 height,
 iconName,
 viewBox,
 width,
}) => (
 <svg
  className={`svg-sprite _menu${className ? " " + className : ""}`}
  height={height}
  viewBox={viewBox}
  width={width}
 >
  <use xlinkHref={`assets/img/svg/f-icon/menu-icons/all.svg#${iconName}`}></use>
 </svg>
);

export const Input = forwardRef(
 ({ type, spellCheck = false, autoComplete = "off", ...props }, ref) => {
  if (type === "text") {
   return (
    <input
     spellCheck={spellCheck}
     autoComplete={autoComplete}
     {...props}
     ref={ref}
     type={type}
    />
   );
  } else {
   return <input {...props} ref={ref} type={type} />;
  }
 }
);

export const Textarea = forwardRef(({ spellCheck = false, ...props }, ref) => (
 <textarea spellCheck={spellCheck} {...props} ref={ref}>
  {props.children}
 </textarea>
));

export const FixWidth = ({ className = "", children, ...props }) => (
 <Div className={`container${className && " " + className}`} {...props}>
  <Div className="row">
   <Div className="col-12">{children}</Div>
  </Div>
 </Div>
);

export const Logo = ({ children, className = "", ...props }) => (
 <Link className={`logo${className && " " + className}`} to="/" {...props}>
  {children}
 </Link>
);

export const LinksList = ({ data = "", ...props }) => (
 <Ul {...props}>
  {data &&
   data.map((item) =>
    item.id !== 0 ? (
     <Li className="__it" key={item.id}>
      <NavLink
       to={`/${item.hrefTo}`}
       className="nav-link"
       activeClassName="current"
      >
       {item.label}
      </NavLink>
     </Li>
    ) : null
   )}
 </Ul>
);

export class Cols extends Component {
 render() {
  const {
   leftCols,
   rightCols,
   leftContent,
   rightContent,
   className = "",
  } = this.props;
  return (
   <Div className={`container${className ? " " + className : ""}`}>
    <Div className="row">
     <Div className={`col-lg-${leftCols}`}>{leftContent}</Div>
     <Div className={`col-lg-${rightCols}`}>{rightContent}</Div>
    </Div>
   </Div>
  );
 }
}
