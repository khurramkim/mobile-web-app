import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
	      <header id="header">
		    <div className="container">
		    	<div className="row align-items-center justify-content-between d-flex">
			      <Logo/>
			      <Navigation />	    		
		    	</div>
		    </div>
		  </header>
		</div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div id="logo">
        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active"><a href="index.html">Home</a></li>
          <li><a href="about-us.html">About Us</a></li>
          <li><a href="category.html">Category</a></li>
          <li><a href="price.html">Price</a></li>
          <li><a href="blog-home.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li className="menu-has-children"><a href="">Pages</a>
            <ul>
				<li><a href="elements.html">elements</a></li>
				<li><a href="search.html">search</a></li>
				<li><a href="single.html">single</a></li>
            </ul>
          </li>
          <li><a className="ticker-btn" href="#">Signup</a></li>
          <li><a className="ticker-btn" href="#">Login</a></li>				          				          
        </ul>
      </nav>
    );
  }
}

export default Header;
