import React from 'react'
import './info.css'
import coffee from './assets/serve-coffee.png';
export default function Info() {
  return (
    <div>
      <div class="info">
        <div class="about-box">
            <img src={coffee} alt="" className='col-md-4'/>
            <div class="infoDetail col-md-8 ">
                <h3>About <span>us</span></h3>
                <h6>Sip into Perfection</h6>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur doloremque mollitia sequi? Asperiores dolores quia dicta aliquid vel recusandae natus, necessitatibus hic eum deleniti harum maiores officia culpa perferendis?</p>
                    <button>
                        Start Your Order
                    </button>
            </div>
        </div>
    </div>
    </div>
  )
}
