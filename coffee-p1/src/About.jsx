import React from 'react';
import menu1 from './assets/menu_item_1.png';
import menu2 from './assets/menu_item_2.png';
import menu3 from './assets/menu_item_3.png';
import menu4 from "./assets/menu_item_4.png";
import './about.css'
import Signup from './Signup';
export default function About() {
  return (
    <div>
    <div id="about">
    
        <div class="contextMenu container-fluid">
            <h3>Cold <span>Coffee</span></h3>
            <div class="coffeeList">
                <div class="list">
                    <img src={menu1} alt=""/>
                    <h3>Caramel Frappē</h3>
                    <p>
                       It is a creamy, blended beverage featuring rich coffee, sweet caramel syrup, and ice, topped with whipped cream and a drizzle of
                        caramel. It's a refreshing, indulgent treat perfect for any time of day.
                    </p>
                    <div class="price">
                        <p>$8.60</p> <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu2} alt=""/>
                    <h3>Macchiato</h3>
                    <p>An espresso-based coffee drink marked with a small amount of steamed milk or foam. Its name, meaning "stained" in Italian,
                    reflects its distinctive look. The macchiato strikes a balance between the boldness of espresso and the creaminess of
                    milk.</p>
                    <div class="price">
                        <p>$8.60</p>
                        <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu3} alt=""/>
                    <h3>Affogato</h3>
                    <p>Affogato is an Italian dessert featuring a scoop of vanilla gelato or ice cream "drowned" in a shot of hot espresso. The
                    blend of hot coffee and cold, creamy gelato creates a delightful contrast of flavors.</p>
                    <div class="price">
                        <p>$11.40</p>
                        <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu4} alt=""/>
                    <h3>Cold Brew</h3>
                    <p>Smooth, less acidic coffee made by steeping coarsely ground beans in cold water for 12-24 hours. It's rich in flavor,
                    often served over ice, and perfect for refreshing caffeine boosts.</p>
                    <div class="price">
                        <p>$6.40</p>
                        <button>Order now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
