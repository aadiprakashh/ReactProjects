import React from 'react'
import './menu.css'
import menu1 from "./assets/menu_item_1.png";
import menu2 from "./assets/menu_item_2.png";
import menu3 from "./assets/menu_item_3.png";
import menu4 from "./assets/menu_item_4.png";
import menu5 from "./assets/menu_item_5.png";
import menu6 from "./assets/menu_item_6.png";
import menu7 from "./assets/menu_item_7.png";
import menu8 from "./assets/menu_item_8.png";

export default function Menu() {
  return (
    <div>
      
    <div class="specialMenu">
        <div class="contextMenu">
            <h3>Special menu  <span>for you</span></h3>
            <div class="coffeeList">
                <div class="list">
                    <img src={menu2} alt=""/>
                    <h3>Caramel Frappē</h3>
                    <div class="price">
                        <p>$8.60</p> <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu1} alt=""/>
                    <h3>Macchiato</h3>
        
                    <div class="price">
                        <p>$8.60</p>
                        <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu5} alt=""/>
                    <h3>Affogato</h3>
        
                    <div class="price">
                        <p>$11.40</p>
                        <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu6} alt=""/>
                    <h3>Cold Brew</h3>
                    <div class="price">
                        <p>$6.40</p>
                        <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu7} alt=""/>
                    <h3>Caramel Frappē</h3>
                    <div class="price">
                        <p>$8.60</p> <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu8} alt=""/>
                    <h3>Macchiato</h3>
                
                    <div class="price">
                        <p>$8.60</p>
                        <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu3} alt=""/>
                    <h3>Affogato</h3>
                
                    <div class="price">
                        <p>$11.40</p>
                        <button>Order now</button>
                    </div>
                </div>
                <div class="list">
                    <img src={menu4} alt=""/>
                    <h3>Cold Brew</h3>
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
