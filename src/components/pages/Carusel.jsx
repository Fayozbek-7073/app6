
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../../node_modules/bootstrap/dist/js/bootstrap"


const Carusel = () => {
  return (
    <div>
        <div id="carouselExampleDark" className="carousel  slide">
     <div className="card-corusel-btn">
        <h3>T-shirt / Tops</h3>
        <h1>Summer Value Pack</h1>
        <h3>cool / colorful / comfy</h3>
        <button className="btn btn-light">Shop Now</button>
     </div>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
       </div>
         <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="15 trans hovers00">
          <img src="../../font/shop-hero-1-product-slide-1.png" className="d-block w-100" alt="shop"/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="../../font/shop-hero-1-product-slide-1.png" className="d-block w-100" alt="shop"/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src="../../font/shop-hero-1-product-slide-1.png" className="d-block w-100" alt="shop"/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
     </div>
    </div>
  )
}

export default Carusel
