// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink,
//   BrowserRouter,
//   Routes
// } from "react-router-dom";


// const Nav = () => (
//     <nav>
//      <NavLink exact to="/" activeClassName="active">Home</NavLink>|
//      <NavLink to="/contact" activeClassName="active">Contact</NavLink>|
//      <NavLink to="/products" activeClassName="active">Product</NavLink>|
//     </nav>
// )

// const Header =()=>(
//     <header>
//         <h1>Githup Finder</h1>
//     </header>
// )
// const HomePage =()=>(
//     <header>
//       <div>Home Page</div>
//     </header>
// )
// const ContactPage =()=>(
//     <header>
//       <div>Contact Page</div>
//     </header>
// )
// const ProductPage =()=>(
//     <header>
//       <div>Product Page</div>
//     </header>
// )
// const NotFoundPage =()=>(
//     <header>
//       <div>Not Found Page 404</div>
//     </header>
// )

// const AppRouter = () => (
//     <BrowserRouter>
//     <Header />
//     <Nav />
//     <Routes>
//         <Route exact path="/" component = {HomePage}></Route>
//         <Route  path="/contact" component = {ContactPage}></Route>
//         <Route  path="/product" component = {ProductPage}></Route>
//         <Route  component = {NotFoundPage}></Route>
//     </Routes>

// </BrowserRouter>
// )

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

//  function AppRouter() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
// export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import "./AppRouter.css"
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}
function Product() {
  return <h2>Product Page</h2>;
}
function ProductDetails() {
  return <h2>Product Details Page</h2>;
}

function AppRouter() {
  return (
    <Router>
      <nav>
        <NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}end>Home</NavLink> | 
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}end>About</NavLink> | 
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}end>Contact</NavLink>|
        <NavLink  to="/product" className={({ isActive }) => isActive ? "active" : ""}end>Product</NavLink>|
        <NavLink to="/product/12" className={({ isActive }) => isActive ? "active" : ""}end>Product Details</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/" element={<Product />} />|
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
