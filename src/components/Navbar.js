import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
<nav class="mb-1 navbar navbar-expand-lg navbar-dark orange-color">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item avatar">
      <a class="nav-link" href="#">
            <Link 
                            to={{pathname :`/logout` 
                        }}> LogOut
            </Link>
        </a>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default Navbar;