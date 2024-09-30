import React from 'react'
import logo from './assets/CoffeeLove.svg';
import cart from "./assets/icons-cart.png";
import hero_img from "./assets/hero-coffee.png";
import './Home.css'
import Modal from './Modal';
export default function Home() {
  return (
    <div class="container-fluid" id="home">
      <div class="box1 col-md-7">
        <div class="menubar">
          <img class="logo" src={logo} alt="" />
          <div class="menu">
            <a href="#home" class="active">
              Home
            </a>
            <a href="#home">Menu</a>
            <a href="#home">Delivery</a>
          </div>
        </div>
        <div class="intro">
          <div class="line">
            <h1>
              The <span>coffee</span> you will
            </h1>
            <h1>
              {" "}
              fall in <span>love</span> with
            </h1>
          </div>
          <p>
            Sip, savor and spread the love - where every cup is a caffinated hug
            at our cozy coffee haven!
          </p>
          <button>
            Order now <img src="assets/cart.png" width="20px" alt="" />
          </button>
        </div>
      </div>

      <div class="box2 col-md-4">
        <div class="shop">
          <input type="search" name="" id="" placeholder="Cold Brew" />
          <img src={cart} alt="" />
        </div>
        <img
          src={hero_img}
          alt=""
          width="400px"
          class="hero-img"
        />
      </div>
    </div>
  );
}
