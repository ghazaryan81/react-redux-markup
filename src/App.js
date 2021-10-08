import React from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
 routerMiddleware,
 ConnectedRouter,
 connectRouter,
} from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";

import { links } from "./reducers/links";
import { ecommerceSidebarMenuLinks } from "./reducers/ecommerce-sidebar-menu-links";
import {
 Div,
 Header,
 Logo,
 FixWidth,
 Nav,
 LinksList,
 Cols,
 Ul,
 Li,
 H1,
 H2,
 Article,
 Figure,
 Img,
 Span,
 P,
 Input,
 // SvgSpriteMenuIcons,
 SvgSprite,
 Btn,
} from "./components";

import * as data from "./mock/navMenu.json";
import * as vertMenu from "./mock/vertMenu.json";
import * as byCategory from "./mock/byCategory.json";
import * as byTag from "./mock/byTag.json";
import * as products from "./mock/products.json";

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];
const reducers = (history) =>
 combineReducers({
  router: connectRouter(history),
  links,
  ecommerceSidebarMenuLinks,
 });

const store = createStore(
 reducers(history),
 composeWithDevTools(applyMiddleware(...middlewares))
);

const element = <h1>Привет, мир!</h1>;

const Routes = () => (
 <Router>
  <Div className="wrapper">
   <Header className="main-header">
    <FixWidth>
     <Div className="top-bar">
      <Logo to="/" children="React Tasks" />

      <Div className="links-bar">
       <Nav>
        {<LinksList className="links-list" data={data?.default?.results} />}
       </Nav>

       <Div className="enter-system">
        <Link to="/" className="def-link">
         Log in
        </Link>
        <Span className="separator">/</Span>
        <Link to="/" className="def-link">
         Sign Up
        </Link>
       </Div>
      </Div>
     </Div>
    </FixWidth>
   </Header>

   <Cols
    className="mt-4"
    leftCols={3}
    rightCols={9}
    leftContent={
     <>
      <Div className="segment _sidebar-padding">
       <H2 className="second-title _sidebar">Product Types</H2>
       <Ul className="vertical-menu _product-type">
        {vertMenu?.default?.results?.map((item, index) => (
         <Li className="__it" key={index}>
          <NavLink
           to={item.hrefTo}
           className="def-link _count"
           activeClassName="current"
          >
           <Span className="group-with-icons">{item.label}</Span>
           <i className="data-info">{item.count}</i>
          </NavLink>
         </Li>
        ))}
       </Ul>
      </Div>

      <Div className="segment _sidebar-padding mt-4">
       <H2 className="second-title _sidebar">By Category</H2>
       <Ul className="vertical-menu">
        {byCategory?.default?.results?.map((item, index) => (
         <Li className="__it" key={index}>
          <NavLink
           to={item.hrefTo}
           className="def-link"
           activeClassName="current"
          >
           {item.label}
           <i className="data-info">50</i>
          </NavLink>
         </Li>
        ))}
       </Ul>
      </Div>

      <Div className="segment _sidebar-padding mt-4">
       <H2 className="second-title _sidebar">By Tag</H2>
       <Ul className="vertical-menu">
        {byTag?.default?.results?.map((item, index) => (
         <Li className="__it" key={index}>
          <NavLink
           to={item.hrefTo}
           className="def-link"
           activeClassName="current"
          >
           {item.label}
           <i className="data-info">50</i>
          </NavLink>
         </Li>
        ))}
       </Ul>
      </Div>
     </>
    }
    rightContent={
     <>
      <Div className="page-bar">
       <H1 className="page-title mb-4" children="Eyebrow" />
       <Div className="page-tools">
        <Btn className="btn-grid soft-bg">
         <SvgSprite
          iconName="icon-grid-0"
          viewBox="0 0 19 19"
          className="svg-icons icon-grid-0"
         />
        </Btn>

        <Btn className="btn-grid soft-bg">
         <SvgSprite
          iconName="icon-grid-1"
          viewBox="0 0 19 18"
          className="svg-icons icon-grid-1"
         />
        </Btn>

        <Btn className="btn-grid soft-bg">
         <SvgSprite
          iconName="icon-grid-2"
          viewBox="0 0 19 19"
          className="svg-icons icon-grid-2"
         />
        </Btn>

        <Btn className="btn-grid soft-bg">
         <SvgSprite
          iconName="icon-grid-3"
          viewBox="0 0 19 19"
          className="svg-icons icon-grid-3"
         />
        </Btn>
       </Div>
      </Div>

      <Div className="articles-list">
       {products?.default?.results?.map((item, index) => (
        <Article className="segment _sidebar-padding" key={item.id}>
         <Btn className="wish-list-btn">
          <SvgSprite
           iconName="icon-wish-list"
           viewBox="0 0 15.5 14.4"
           className="icon-wish-list"
          />
         </Btn>

         <H2 className="second-title _article">
          <Link title={item.name} className="second-title-link _article" to="/">
           {item.name}
          </Link>
         </H2>
         <Figure className="figure _segment">
          <Link className="img-link img-link_segment" to="/" title={item.name}>
           <Img
            className="img _segment-img"
            alt={item.name}
            title={item.name}
            src={item.image_link}
           />
          </Link>
         </Figure>
         <Ul className="descr-list">
          <Li className="__it">
           <Span className="__it-left">Brand:</Span>
           <Span className="__it-right">{item.brand}</Span>
          </Li>
          <Li className="__it">
           <Span className="__it-left">Price:</Span>
           <Span className="__it-right">
            {item.price_sign}
            {item.price}
           </Span>
          </Li>
         </Ul>
         <P className="segment-descr">
          {item.description.replace(/<[^>]*>?/gm, "")}
         </P>
         <Div className="item-tools">
          <Div className="counter-purchases">
           <Input className="__input" defaultValue="99" />
           <Div className="__inc-decr">
            <Btn className="__inc-decr-btn __increment">+</Btn>
            <Btn className="__inc-decr-btn __descrement">-</Btn>
           </Div>
          </Div>
          <Btn className="add-to-card" type="button" children="Add to card" />
         </Div>
        </Article>
       ))}
      </Div>
      <Div className="page-bar _bottom">
       <Span>&nbsp;</Span>
       <Div className="pagination">
        <Link to="/" className="page" children="1" />
        <Link to="/" className="page" children="2" />
        <Link to="/" className="page" children="3" />
        <Link to="/" className="page" children="4" />
       </Div>
      </Div>
     </>
    }
   />

   <FixWidth></FixWidth>
  </Div>
 </Router>
);

const Routes2 = () => <Div>asdasdas</Div>;
const App = () => (
 <Provider store={store}>
  <ConnectedRouter history={history}>
   <Routes />
   {/* <Routes2 /> */}
  </ConnectedRouter>
 </Provider>
);

export default App;
