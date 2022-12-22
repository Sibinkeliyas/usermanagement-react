import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { userHome, userLogin } from '../../../redux/actions/signInActions'
import Loading from '../../loading'
import { useNavigate } from 'react-router-dom'
import './home.css'

function Home() {


    const state = useSelector((state) => state.userLogin)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userdata} = state
    const {loading} = state
    let userInfo = localStorage.getItem('userInfo')


    if(userInfo != null) {
        dispatch(userHome())
    } else { 
      navigate('/login')
    }
    useEffect (() => {
      if(userInfo) {
        navigate('/')
      } else {
        navigate('/login')
      }
    },[userdata])
    const handleLogout = () => {
       localStorage.removeItem('userInfo')
       navigate('/login')
    }

 
  return (
    <div>
       
      <head>

  <title>Kona Coffee Company</title>

</head>

<body>
  <header>
    {/* <!-- Top Navigation --> */}
    <nav>
      <div className="nav-links">
        
        <div className="nav-secondary-links">
          <ul>
            <li className="nav-location">
              <span><i className="fa-solid fa-location-dot"></i></span>
              <a className="block-link" href="#">Find a Store</a>
            </li>
            {
                userInfo  ? <><li>
                <button className="button" onClick={() => {
                    handleLogout()
                }}>Logout</button>
              </li>
              <li>
                <button className="button button-dark" onClick={() => {
                  navigate('/profile')
                }}>profile</button>
              </li></> : <li>
                <button className="button">Sign In</button>
              </li>
            }
            
          </ul>
        </div>
      </div>
      {/* <!-- Mobile Nav Menu --> */}
      <div className="mobile-nav-menu">
        <ul>
          <li>
            <button className="nav-menu-button">
              <span className="mobile-nav-item">Menu</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </li>
          <li><a className="mobile-nav-item" href="#">Rewards</a></li>
          <li><a className="mobile-nav-item" href="#">Gift Cards</a></li>
          <hr />
        </ul>
        <div className="ham-nav-menu-buttons">
            {
                userInfo ?  <><button className="button" onClick={() => handleLogout}>Logout</button>
                <button className="button">{userInfo.name}</button></> : <><button className="button">Sign In</button>
                </>
            }
          
        </div>
        <div className="ham-nav-menu-links">
          <a className="block-link" href="#">Find a Store</a>
        </div>
      </div>
    </nav>
  </header>

  {/* <!-- Main Content --> */}
  <main>
    <section className="primary-cta card-container">
      <div className="primary-cta-slogan card-item">
        <h2>
          <span className="secondary-color">Summer </span><br /><span class="stroke">TuesYays</span>
        </h2>
      </div>
      <div className="primary-cta card-item text-block-padding column">
        <h1>Turn Tuesdays into TuesYays with 50% off</h1>
        <p>
          Every Tuesday in July, Kona Coffee rewards members can enjoy half
          off their favorite beverages.
        </p>
        <a className="button button-light no-decoration" href="#">Join now</a>
      </div>
    </section>
    <section className="holiday-cta card-container">
      <div className="holiday-cta-image card-item">
        <figure className="card-figure">
          <img className="card-image" src="https://github.com/m-Colen/kona-coffee/blob/main/images/holiday-cta.jpg?raw=true" alt="Cup of coffee on a pink windowsill" />
          <figcaption className="card-caption">
            Photo by
            <a href="https://unsplash.com/@natanja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Natanja Grün</a>
            on
            <a href="https://unsplash.com/s/photos/kona-coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
          </figcaption>
        </figure>
      </div>
      <div className="holiday-cta card-item text-block-padding column">
        <h2>Hello, holiday weekend</h2>
        <p>
          Celebrate the fourth with a special treat. Like a Kona Cookie
          Crumble or a Kona-Chino
        </p>
        <a className="button button-light no-decoration" href="#">Learn more</a>
      </div>
    </section>
    <section className="featured-product-cta card-container">
      <div className="featured-product-image card-item">
        <figure className="card-figure">
          <img className="card-image" src="https://github.com/m-Colen/kona-coffee/blob/main/images/featured-product.jpg?raw=true" alt="Person holding green coffee beverage" />
          <figcaption class="card-caption">
            Photo by
            <a href="https://unsplash.com/@lauraashtonashley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Laura Barry</a>
            on
            <a href="https://unsplash.com/s/photos/frappe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
          </figcaption>
        </figure>
      </div>
      <div className="featured-product-cta card-item text-block-padding column">
        <h2>Hooray for Matcha</h2>
        <p>
          The new Match frappe is a happy mix of green tea leaves and whole
          milk, ice, & whipped cream.
        </p>
        <a className="button button-light no-decoration" href="#">Order now</a>
      </div>
    </section>
    <section className="card-container">
      <div className="notice text-block-padding">
        <h3 className="card-item notice">Notice</h3>
        <p className="card-item notice">
          *Summer TuesYays offer available at participating stores. Excludes
          ready to drink, bottled beverages and alcohol. Cannot be combined
          with other offers or discounts. Offer not available through
          delivery. Limit one per person.
        </p>
      </div>
    </section>
  </main>

  <hr />

  {/* <!-- Footer --> */}
  <footer>
    <div class="footer-links">
      <ul>
        <li>
          <div className="about link-card">
            <div className="link-top-card about-clickable">
              <h3>About Us</h3>
              <button aria-label="Expand to learn more about us" aria-expanded="false">
                <i className="fa-solid fa-angle-down about-arrow"></i>
              </button>
            </div>
            <ul className="link-bottom-card about-hidden hidden">
              <li><a href="#">Our Company</a></li>
              <li><a href="#">Our Coffee</a></li>
              <li><a href="#">Stories and News</a></li>
              <li><a href="#">Kona Archive</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="careers link-card">
            <div className="link-top-card careers-clickable">
              <h3>Careers</h3>
              <button aria-label="Expand to learn more about our careers" aria-expanded="false">
                <i className="fa-solid fa-angle-down about-link careers-arrow"></i>
              </button>
            </div>
            <ul class="link-bottom-card careers-hidden hidden">
              <li><a href="#">Culture and Values</a></li>
              <li><a href="#">Inclusion, Diversity, and Equity</a></li>
              <li><a href="#">College Achievement Plan</a></li>
              <li><a href="#">Alumni Community</a></li>
              <li><a href="#">U.S. Careers</a></li>
              <li><a href="#">International Careers</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="social-impact link-card">
            <div className="link-top-card social-impact-clickable">
              <h3>Social Impact</h3>
              <button aria-label="Expand to learn more about our social impact" aria-expanded="false">
                <i className="fa-solid fa-angle-down about-link social-impact-arrow"></i>
              </button>
            </div>
            <ul className="link-bottom-card social-impact-hidden hidden">
              <li><a href="#">People</a></li>
              <li><a href="#">Planet</a></li>
              <li>
                <a href="#">Environmental and Social Impact Reporting</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="for-business-partners link-card">
            <div className="link-top-card business-partners-clickable">
              <h3>For Business Partners</h3>
              <button aria-label="Expand to learn more about our partnerships" aria-expanded="false">
                <i className="fa-solid fa-angle-down about-link business-partners-arrow"></i>
              </button>
            </div>
            <ul className="link-bottom-card business-partners-hidden hidden">
              <li><a href="#">Landlord Support Center</a></li>
              <li><a href="#">Suppliers</a></li>
              <li><a href="#">Corporate Gift Card Sales</a></li>
              <li><a href="#">Office and Foodservice Coffee</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="order-and-pickup link-card">
            <div class="link-top-card order-clickable">
              <h3>Order and Pickup</h3>
              <button aria-label="Expand to learn more about ordering and pickup options" aria-expanded="false">
                <i className="fa-solid fa-angle-down about-link order-arrow"></i>
              </button>
            </div>
            <ul className="link-bottom-card order-hidden hidden">
              <li><a href="#">Order on the App</a></li>
              <li><a href="#">Order on the Web</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Order and Pickup Options</a></li>
              <li><a href="#">Explore and Find Coffee for Home</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <hr />
    <ul className="social-media-links flex">
      <li>
        <a href="#">
          <i className="fa-brands fa-spotify"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa-brands fa-pinterest-p"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </li>
    </ul>
    <ul className="supplemental-links">
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">CA Supply Chain Act</a></li>
      <li><a href="#">Cookie Preferences</a></li>
    </ul>
    <p className="copyright">© 2022 Kona Coffee Company. All rights reserved.</p>
  </footer>
</body>
    </div>
  )
}

export default Home
