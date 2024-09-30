import star from './assets/star-icon.png';
import arrow from "./assets/dessert.png";
import './signup.css'
export default function Signup() {
  return (
    <div>
    <div class="modal">
        <div class="modBox">
            <img src={star} alt=""/>
            <div class="modText">
                <h3>Sign up to our coffee reward program</h3>
                <a href="">Learn More <img src={arrow} alt=""/></a>
            </div>
        </div>
    </div>
    </div>
  )
}
