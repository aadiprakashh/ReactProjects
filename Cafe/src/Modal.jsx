import React from 'react'
import './modal.css';
import hot from "./assets/hot-coffee.png";
import cold from "./assets/cold-coffee.png";
import tea from "./assets/tea.png";
import desert from "./assets/dessert.png";
export default function Modal() {
  return (
    <div id="modal">
      <div class="itemMenu">
        <div class="item">
          <img src={hot} alt="" />
          <p>HOT COFFEE</p>
        </div>
        <div class="item ">
          <img src={cold} alt="" />
          <p class="active">COLD COFFEE</p>
        </div>
        <div class="item">
          <img src={tea} alt="" />
          <p>TEA</p>
        </div>
        <div class="item">
          <img src={desert} alt="" />
          <p>DESSERT</p>
        </div>
      </div>
    </div>
  );
}
