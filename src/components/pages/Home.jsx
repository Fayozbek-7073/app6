import { useEffect, useState,useMemo } from "react";
import "../../App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [inputData, setInputData] = useState("");

  const fetchProducts = async () => {
    const res = await fetch(
      `https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts`
    );
    const data = await res.json();

    console.log(data);

    if (data && data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  console.log(inputData);
  const searchProduc = useMemo(() => {
    if(!inputData) return products
   
    return products.filter(
      (item) => item.title.toLowerCase()?.indexOf(inputData?.toLowerCase()) !== -1
    );
  }, [inputData,products]);
  console.log(searchProduc, "producst");
  return (
    <div>
      <div id="carouselExampleDark" className="carousel  slide">
        <div className="card-corusel-btn">
          <h3>T-shirt / Tops</h3>
          <h1>Summer Value Pack</h1>
          <h3>cool / colorful / comfy</h3>
          <button className="btn btn-light"><Link to="/men" className="lists">Shop Now</Link>  </button>
        </div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="15 trans hovers00"
          >
            <img
              src="../../font/shop-hero-1-product-slide-1.png"
              className="d-block w-100"
              alt="shop"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="../../font/shop-hero-1-product-slide-1.png"
              className="d-block w-100"
              alt="shop"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="../../font/shop-hero-1-product-slide-1.png"
              className="d-block w-100"
              alt="shop"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <input
        id="with-input"
        className=" form-control me-2 "
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setInputData(e.target.value)}
      />
      {searchProduc.length > 0 && (
        <div className="products">
          {searchProduc.slice(page * 9 - 9, page * 9).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.img} alt={prod.title} /> {/* alt is imp */}
                <span>{prod.title}</span>
                {/* <span>
              {prod.title}
            </span>
            <span>
              {prod.title}
            </span> */}
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>

          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < products.length / 10 ? "" : "pagination__disable"}
          >
            Next
          </span>
        </div>
      )}

      <div className="bigsaving">
        <div className="hovain">
          <div className="shirt">
            <h4>Hawaiian Shirts</h4>
            <p>Dress up in summer vibe</p>
            <h5>UPTO 50% OFF</h5>
            <img src="../font/strilka-oq.png" alt="S" />
            <br />
            <button className="my-btn-white trans btn-bg-dark-hover">
              SHOP NOW
            </button>
          </div>
          <div className="printed">
            <div className="mr-left">
              <h4>Printed T-Shirt</h4>
              <p>New Designs Every Week</p>
              <h5>UPTO 40% OFF</h5>
              <img src="../font/strilka-oq.png" alt="S" />
              <br />
              <button className="my-btn-white trans btn-bg-dark-hover">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="cargo">
            <div className="mr-left">
              <h4>Cargo Joggers</h4>
              <p>Move with style & comfort</p>
              <h5>UPTO 50% OFF</h5>
              <img src="../font/srillka-dark.png" alt="S" />
              <br />
              <button className="my-btn-white trans btn-bg-white-hover">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <div className="urban">
          <div className="shirtsz">
            <div className="mr-left">
              <h4>Urban Shirts</h4>
              <p>Move Live</p>
              <h5>UPTO 60% OFF</h5>
              <img src="../font/srillka-dark.png" alt="S" />
              <br />
              <button className="my-btn-white trans btn-bg-white-hover">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="shirts">
            <div className="mr-left">
              <h4>Oversized T-Shirts</h4>
              <p>Street Style Icon</p>
              <h5>UPTO 60% OFF</h5>
              <img src="../font/srillka-dark.png" alt="S" />
              <br />
              <button className="my-btn-white trans btn-bg-white-hover">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="topbrids">
        <h2>Top Brands Deal</h2>
        <h5>
          Up To <span className="yellow60">60%</span> off on brands
        </h5>
        <img className="topbrids-img cursor" src="../font/Group 48.png" alt="Grup" />
      </div>

      <div className="footer">
        <div className="need">
          <ul>
            <li className="nav-item"><h3>Need Help</h3></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link  iconsz" href="#">Contact Us</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Track Order</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Returns & Refunds</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Faqs</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Career</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#"></a></li>
            <li className="nav-item icinmr"><a className="trans nav-link iconsz" href="#"><img className="imgnon" src="../../../font/Frame 18.png" alt="I" /></a></li>            
          </ul>
          <ul>
            <li className="nav-item"><h3>Company</h3></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">About Us</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Track Order</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">euphoriastan</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Collaboration</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Media</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#"></a></li>            
          </ul>
          <ul>
            <li className="nav-item"><h3>More Info</h3></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Sitemap</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Term and Conditions</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Returns & Refunds</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Privacy Policy</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#"></a></li>            
          </ul>
          <ul> 
            <li className="nav-ite icinmrm icinmr"><h3>Location</h3></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">support@euphoria.in</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">Eklingpura Chouraha, Ahmedabad Main Road</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a></li>
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#"></a></li>       
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#"></a></li>       
            <li className="nav-item icinmr"><a className="hovers trans nav-link iconsz" href="#"> </a></li>       
            <li className="nav-item icinmr"><h4>Download The App </h4></li>  
            <li className="nav-item icinmr"><a className=" trans nav-link iconsz" href="#"><img className="foter-img" src="../../../font/Frame 126.png" alt="I" /></a></li>       

          </ul>
        </div>
      </div>


    </div>
  );
}

export default Home;
