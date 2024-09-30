import React from 'react'
import './footer.css';
import logo from './assets/CoffeeLove.svg';
export default function Footer() {
  return (
    <div>
      <footer>
        <div class="social">
            <div class="logo">
                <img src={logo} alt="" width="100px"/>
                <p>CoffeeLove</p>
            </div>

            <div class="media">
                <img src="assets/facebook_logo.png" alt=""/>
                <img src="assets/instagram-logo.png" alt=""/>
                <img src="assets/twitter-logo.png" alt=""/>
            </div>
        </div>

        <div class="menu">
            <div class="submenu">
                <a href="">HOME</a>
                <a href="">MENU</a>
                <a href="">DELIVERY</a>
                <a href="">LOCATIONS</a>
            </div>
            <div class="subs">
                <h1>NEWSLETTER</h1>
               <div>
                <input type="email" placeholder="Your Email"/>
                <button>Subscribe</button>
               </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
