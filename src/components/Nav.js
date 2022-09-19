import React from 'react'

const Nav = () => {
  return(
    <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src="https://productthinking.io/static/media/productwhite.c1e4d670.webp" width="70px"/>Leanpitch</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
    </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
    <a id="subscribe"><span>Subscribe</span></a>
    <a id="contactus"><span>Contact Us</span></a>
    </form>
    </div>
    </nav>  
    </div>
    )
  }

  export default Nav;