import React from "react";

const Header = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">BitShow</a>
          <ul className="right hide-on-med-and-down">
            <li><a><i className="material-icons">search</i></a></li>
            {/* <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li> */}
          </ul>
        </div>
      </nav>
    
    )

}

export { Header }