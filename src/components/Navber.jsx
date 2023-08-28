
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../../node_modules/bootstrap/dist/js/bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link,NavLink } from "react-router-dom"
import  { useState } from "react";
import { faMagnifyingGlass,faHeart,faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         <Link to='/'><img src="../../font/Logo.svg" alt="Logo" /></Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#"><>Shop</> </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Men</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
            </li>          
            </ul> */}
             <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span> 
              </div>
              <ul className={menuOpen ? "open " : "navbar-nav me-auto mb-2 mb-lg-0 gap-4"}>
              <li className="nav-item">
                  <NavLink className='nav-link' to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to="/men">Men</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to="/women">Women</NavLink>
                </li>
              </ul>
            <FontAwesomeIcon className="icon-ds-none" icon={faMagnifyingGlass} />
            <form className="d-flex" role="search">
                <input id="with-input" className=" form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
            </form>
            <ul className="navbar-nav navbar-nava me-auto mb-2 mb-lg-0 gap-5">
                <li className="nav-item cursor trans hovers">
                <FontAwesomeIcon icon={faHeart} />
                </li>
                <li className="nav-item cursor trans hovers">
                <FontAwesomeIcon icon={faUser} />
                </li>
                <li className="nav-item cursor trans hovers">
                <FontAwesomeIcon icon={faCartShopping} />
                </li>          
            </ul>
         </div>
        </div>
    </nav>

    {/* <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
        <div className="card-corusel-btn"></div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2600">
      <img src="../../font/shop-hero-1-product-slide-1.png" className="d-block w-100" alt="SHop"/>
    </div>
    <div className="carousel-item" data-bs-interval="2600">
      <img src="../../font/shop-hero-1-product-slide-1.png" className="d-block w-100" alt="SHop"/>
    </div>
    <div className="carousel-item" data-bs-interval="2600">
      <img src="../../font/shop-hero-1-product-slide-1.png" className="d-block w-100" alt="SHop"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}



  </div>
  )
}   

export default Navber
